// src/components/InputField.jsx
import React from "react";

const InputField = ({
  inputLabel,
  placeholder,
  inputSpan,
  type = "text",
  name,
  value,
  onChange,
  error,
  readOnly = false,
  required = false,
  className,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      {inputLabel && (
        <label className="pb-1 text-sm text-[#525252] font-semibold">
          {inputLabel}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        className={`relative border w-full rounded-sm px-4 py-4 text-base text-[#000000] ${className} ${
          error ? "border-red-500" : "border-[#DBDDE0]"
        } ${readOnly ? "bg-gray-50" : "bg-white"}`}
        {...rest}
      />
      {error && <span className="text-xs text-red-500 ml-4">{error}</span>}
      {inputSpan && !error && (
        <span className="text-xs text-[#525252] font-normal">{inputSpan}</span>
      )}
    </div>
  );
};

export default InputField;