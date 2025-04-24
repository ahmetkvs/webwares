export const validateName = (value) =>
  value.length >= 3 || "Name must be at least 3 characters long";

export const validateEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value
  ) || "Invalid email address";

export function validatePassword(value) {
  const errors = [];
  if (value.length < 8) errors.push("at least 8 characters");
  if (!/[a-z]/.test(value)) errors.push("a lowercase letter");
  if (!/[A-Z]/.test(value)) errors.push("an uppercase letter");
  if (!/[0-9]/.test(value)) errors.push("a number");
  if (!/[!@#$%^&*]/.test(value)) errors.push("a special character");

  return errors.length > 0
    ? `Password must contain ${errors.join(", ")}.`
    : true;
}

export const doPasswordsMatch = (password, confirmPassword) =>
  password === confirmPassword || "Passwords do not match";

export const validateTurkishPhone = (value) =>
  /^(?:\+90|0)?5\d{9}$/.test(value) || "Invalid Turkish phone number";

export const validateTaxId = (value) =>
  /^T\d{4}V\d{6}$/.test(value) || 'Tax ID must be in the format "TXXXXVXXXXXX"';

export const validateIBAN = (value) =>
  /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/.test(value) || "Invalid IBAN";
