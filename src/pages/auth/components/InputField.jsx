import React from "react";

const InputField = (
  { label, type = "text", name, id, placeholder, className = "", ...rest },
  ref
) => {
  return (
    <div>
      <div className="flex flex-col w-full space-y-1">
        {label && (
          <label
            htmlFor={name}
            className="text-sm font-medium text-gray-700 dark:text-gray-200 pb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-full py-3 px-4 border-2 border-[#f6f2f4] rounded-full text-sm ${className}`}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
