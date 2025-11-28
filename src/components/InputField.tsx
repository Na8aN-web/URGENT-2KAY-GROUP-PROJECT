import React from "react";

const InputField = ({
  inputLabel,
  placeholder = "Input Text",
  inputSpan,
  value,
  onChange,
  readOnly = false,
  required = false,
  type = "text",
  className,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="pb-1 text-xs text-[#525252] font-semibold">
        {inputLabel}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
        type="text"
        className={`border border-[#DBDDE0] w-full bg-white rounded-sm px-4 py-2 text-sm text-[#000000] ${className}`}
      />
      <span className="text-xs text-[#525252] font-normal">{inputSpan}</span>
    </div>
  );
};

export default InputField;
