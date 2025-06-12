import { useState, useCallback } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const setValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  const getValue = useCallback(
    (name) => {
      return values[name] || "";
    },
    [values]
  );

  const isEmpty = useCallback(() => {
    return Object.values(values).every(
      (value) => !value || !value.toString().trim()
    );
  }, [values]);

  const isDirty = useCallback(() => {
    return Object.keys(values).some(
      (key) => values[key] !== initialValues[key]
    );
  }, [values, initialValues]);

  return {
    values,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    setValue,
    resetForm,
    getValue,
    isEmpty,
    isDirty,
  };
};
