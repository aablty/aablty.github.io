export default function FormSubmitStatus({
  status,
  successMessage,
  errorMessage,
  className = "",
}) {
  if (!status || status === "idle") return null;

  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className={`form_status ${className}`}>
      {isSuccess && (
        <p className="form_message success" role="status">
          {successMessage}
        </p>
      )}

      {isError && (
        <p className="form_message error" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
