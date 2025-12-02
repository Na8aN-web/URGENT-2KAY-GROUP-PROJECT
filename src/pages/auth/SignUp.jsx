import React, { useState } from "react";
import AuthButton from "./components/AuthButton";
import InputField from "./components/InputField";
import AuthLayout from "./components/AuthLayout";
import { Link, useNavigate } from "react-router";
import { useUser } from "../../hooks/useUser";
import { validateEmail, validatePassword } from "../../utils/validation";

const SignUp = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.isValid) {
        newErrors.password = "Password does not meet requirements";
      }
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      login({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      });
      navigate("/verify-email");
    }
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <AuthLayout
      showSubtitle={true}
      showFooterText={true}
      subTitle="Skip the hassle. Send & pay bills in one Click."
      footerText="Already have an account"
      footerActionText="Sign in"
      to="/login"
    >
      <h2 className="text-4xl pb-8">Sign Up</h2>
      <div className="space-y-6">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <InputField
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Enter phone number"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <div>
          <InputField
            label="Set password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setShowPasswordRequirements(true)}
            error={errors.password}
          />
          {showPasswordRequirements && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg text-xs space-y-1">
              <p className="font-semibold mb-2">Password must contain:</p>
              <p
                className={
                  passwordValidation.errors.minLength
                    ? "text-green-600"
                    : "text-gray-500"
                }
              >
                ✓ At least 8 characters
              </p>
              <p
                className={
                  passwordValidation.errors.hasUpperCase
                    ? "text-green-600"
                    : "text-gray-500"
                }
              >
                ✓ One uppercase letter
              </p>
              <p
                className={
                  passwordValidation.errors.hasLowerCase
                    ? "text-green-600"
                    : "text-gray-500"
                }
              >
                ✓ One lowercase letter
              </p>
              <p
                className={
                  passwordValidation.errors.hasNumber
                    ? "text-green-600"
                    : "text-gray-500"
                }
              >
                ✓ One number
              </p>
            </div>
          )}
        </div>

        <div>
          <div className="flex gap-2 items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="text-sm">
              I agree to Urgent 2Kay's Terms and Conditions, Privacy Policy and
              Cookies Policy
            </span>
          </div>
          {errors.agreeToTerms && (
            <p className="text-xs text-red-400 mt-1 ml-6">
              {errors.agreeToTerms}
            </p>
          )}
        </div>

        <AuthButton btnTxt="Sign up" type="submit" onClick={handleSubmit}/>
      </div>
      <p className="text-sm text-center pt-2">
        Already have an account?
        <button onClick={() => navigate('/login')} className="text-[#401C6D] font-extrabold ml-1">
          Sign in
        </button>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
