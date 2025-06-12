import { useState, useCallback } from "react";

export const SUBMIT_STATUS = {
  IDLE: "idle",
  SUCCESS: "success",
  ERROR: "error",
};

export const useFormSubmit = (submitFn, options = {}) => {
  const {
    onSuccess,
    onError,
    resetOnSuccess = true,
    clearErrorsOnSuccess = true,
  } = options;

  const [submitStatus, setSubmitStatus] = useState(SUBMIT_STATUS.IDLE);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values, { resetForm, clearErrors } = {}) => {
      try {
        setSubmitStatus(SUBMIT_STATUS.IDLE);
        setSubmitError(null);

        const result = await submitFn(values);

        setSubmitStatus(SUBMIT_STATUS.SUCCESS);

        if (resetOnSuccess && resetForm) {
          resetForm();
        }

        if (clearErrorsOnSuccess && clearErrors) {
          clearErrors();
        }

        if (onSuccess) {
          onSuccess(result);
        }

        return { success: true, data: result };
      } catch (error) {
        console.error("Form submission error:", error);

        setSubmitStatus(SUBMIT_STATUS.ERROR);
        setSubmitError(error.message || "An error occurred");

        if (onError) {
          onError(error);
        }

        return { success: false, error };
      }
    },
    [submitFn, onSuccess, onError, resetOnSuccess, clearErrorsOnSuccess]
  );

  const clearSubmitStatus = useCallback(() => {
    setSubmitStatus(SUBMIT_STATUS.IDLE);
    setSubmitError(null);
  }, []);

  const isSubmitting = submitStatus === SUBMIT_STATUS.IDLE;
  const isSuccess = submitStatus === SUBMIT_STATUS.SUCCESS;
  const isError = submitStatus === SUBMIT_STATUS.ERROR;

  return {
    submitStatus,
    submitError,
    handleSubmit,
    clearSubmitStatus,
    isSubmitting,
    isSuccess,
    isError,
  };
};
