export const CONTACT_FORM_VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    requiredMessage: "error_name_required",
    minLengthMessage: "error_name_min_length",
    maxLengthMessage: "error_name_max_length",
  },
  email: {
    required: true,
    email: true,
    maxLength: 100,
    requiredMessage: "error_email_required",
    emailMessage: "error_email_invalid",
    maxLengthMessage: "error_email_max_length",
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    requiredMessage: "error_message_required",
    minLengthMessage: "error_message_min_length",
    maxLengthMessage: "error_message_max_length",
  },
};

export const CONTACT_FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  message: "",
};

export const CONTACT_FORM_FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "form_name",
    className: "form_input",
    component: "input",
  },
  {
    name: "email",
    type: "email",
    placeholder: "form_email",
    className: "form_input",
    component: "input",
  },
  {
    name: "message",
    type: "text",
    placeholder: "form_message",
    className: "form_textarea",
    component: "textarea",
    rows: 5,
  },
];
