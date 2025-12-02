import React from "react";

const InputField = ({ 
label, 
type = "text", 
name, 
placeholder, 
value,
onChange,
onFocus,
error,
...rest 
}) => {
return (
  <div>
    <div className="flex flex-col w-full space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 pb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className={`w-full py-3 px-4 border-2 rounded-full text-sm ${
            error ? 'border-red-300' : 'border-gray-200'
          }`}
          {...rest}
        />
      </div>
      {error && (
        <p className="text-xs text-red-400 mt-1 ml-4">{error}</p>
      )}
    </div>
  </div>
);
};

export default InputField;
