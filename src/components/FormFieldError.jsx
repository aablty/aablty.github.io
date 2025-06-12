export default function FormFieldError({ error, className = "" }) {
  if (!error) return null;

  return (
    <span className={`form_error ${className}`} role="alert">
      {error}
    </span>
  );
};