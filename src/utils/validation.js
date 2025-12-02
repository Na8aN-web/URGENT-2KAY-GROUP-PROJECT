// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const validatePassword = (password) => {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return {
    isValid: minLength && hasUpperCase && hasLowerCase && hasNumber,
    errors: {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
    },
  };
};

// Phone validation
export const validatePhone = (phone) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");
  // Check if it's at least 10 digits
  return cleaned.length >= 10;
};

// Name validation
export const validateName = (name) => {
  return name.trim().length >= 2;
};
