// React
import { useCallback } from "react";

// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useForm, useFormValidation, useFormSubmit } from "../hooks";

// Components
import { FormFieldError, FormSubmitStatus } from "./";

// Services
import { sendTelegramMessage } from "../services";

// Config
import {
  CONTACT_FORM_VALIDATION_RULES,
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_FIELDS,
} from "../config/contactFormConfig";

// Styles
import "../assets/styles/components/ContactForm.css";

export default function ContactForm() {
  const { translations } = useLocale();

  const { values, isSubmitting, setIsSubmitting, handleChange, resetForm } =
    useForm(CONTACT_FORM_INITIAL_VALUES);

  const { validateForm, handleBlur, clearErrors, getFieldError } =
    useFormValidation(CONTACT_FORM_VALIDATION_RULES, translations);

  const submitFormData = useCallback(async (formData) => {
    const message = `
🔔 New message from website:
- Name: ${formData.name}
- Email: ${formData.email}
- Message: ${formData.message}
    `.trim();

    return await sendTelegramMessage(message);
  }, []);

  const { submitStatus, handleSubmit: submitForm } = useFormSubmit(
    submitFormData,
    {
      resetOnSuccess: true,
      clearErrorsOnSuccess: true,
    }
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm(values)) {
        return;
      }

      setIsSubmitting(true);

      try {
        await submitForm(values, { resetForm, clearErrors });
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateForm, submitForm, resetForm, clearErrors, setIsSubmitting]
  );

  const handleFieldChange = useCallback(
    (e) => {
      handleChange(e);

      const fieldError = getFieldError(e.target.name);
      if (fieldError) {
        handleBlur(e.target.name, "");
      }
    },
    [handleChange, getFieldError, handleBlur]
  );

  const renderField = useCallback(
    (field) => {
      const { name, type, placeholder, className, component, rows } = field;
      const fieldError = getFieldError(name);
      const fieldValue = values[name] || "";

      const commonProps = {
        name,
        placeholder: translations[placeholder],
        value: fieldValue,
        onChange: handleFieldChange,
        onBlur: (e) => handleBlur(name, e.target.value),
        className: `${className} ${fieldError ? `${className}_error` : ""}`,
        "aria-invalid": !!fieldError,
        "aria-describedby": fieldError ? `${name}-error` : undefined,
      };

      const fieldElement =
        component === "textarea" ? (
          <textarea {...commonProps} rows={rows} />
        ) : (
          <input {...commonProps} type={type} />
        );

      return (
        <div key={name} className="form_group">
          {fieldElement}
          <FormFieldError error={fieldError} id={`${name}-error`} />
        </div>
      );
    },
    [values, translations, handleFieldChange, handleBlur, getFieldError]
  );

  return (
    <form
      className="contacts_form"
      onSubmit={handleSubmit}
      noValidate
      aria-label={translations.contacts || "Contact form"}
    >
      {CONTACT_FORM_FIELDS.map(renderField)}

      <button
        type="submit"
        disabled={isSubmitting}
        className="form_submit"
        aria-describedby="submit-status"
      >
        {isSubmitting ? translations.form_sending : translations.form_send}
      </button>

      <FormSubmitStatus
        status={submitStatus}
        successMessage={translations.form_success}
        errorMessage={translations.form_error}
        id="submit-status"
      />
    </form>
  );
}
