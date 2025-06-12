import { useState, useCallback, useEffect } from "react";

export const useFormValidation = (validationRules, translations) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const updatedErrors = {};
      Object.keys(errors).forEach((field) => {
        if (errors[field]) {
          const rules = validationRules[field];
          if (rules) {
            updatedErrors[field] = validateFieldInternal(
              field,
              errors[field],
              rules
            );
          }
        }
      });
      setErrors(updatedErrors);
    }
  }, [translations]);

  const validateFieldInternal = useCallback(
    (name, value, rules) => {
      if (rules.required && !value.trim()) {
        return translations[rules.requiredMessage] || "This field is required";
      }

      if (rules.minLength && value.trim().length < rules.minLength) {
        return (
          translations[rules.minLengthMessage] ||
          `Minimum ${rules.minLength} characters required`
        );
      }

      if (rules.maxLength && value.trim().length > rules.maxLength) {
        return (
          translations[rules.maxLengthMessage] ||
          `Maximum ${rules.maxLength} characters allowed`
        );
      }

      if (rules.email && value && !/\S+@\S+\.\S+/.test(value)) {
        return translations[rules.emailMessage] || "Invalid email format";
      }

      if (rules.custom && typeof rules.custom === "function") {
        const customError = rules.custom(value);
        if (customError) {
          return translations[customError] || customError;
        }
      }

      return "";
    },
    [validationRules, translations]
  );

  const validateField = useCallback(
    (name, value) => {
      const rules = validationRules[name];
      if (!rules) return "";
      return validateFieldInternal(name, value, rules);
    },
    [validateFieldInternal, validationRules]
  );

  const validateForm = useCallback(
    (values) => {
      const newErrors = {};

      Object.keys(validationRules).forEach((field) => {
        const error = validateField(field, values[field] || "");
        if (error) {
          newErrors[field] = error;
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [validateField, validationRules]
  );

  const handleBlur = useCallback(
    (name, value) => {
      setTouched((prev) => ({ ...prev, [name]: true }));

      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const clearFieldError = useCallback((name) => {
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  const getFieldError = useCallback(
    (name) => {
      return touched[name] ? errors[name] : "";
    },
    [errors, touched]
  );

  return {
    errors,
    touched,
    validateForm,
    validateField,
    handleBlur,
    clearFieldError,
    clearErrors,
    getFieldError,
    hasErrors: Object.keys(errors).some((key) => errors[key]),
  };
};
