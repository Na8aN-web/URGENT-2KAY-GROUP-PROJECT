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
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="pb-1 text-xs text-[#525252] font-semibold">
        {inputLabel}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-[#DBDDE0] w-full bg-white rounded-sm px-4 py-2 text -sm text-[#A8A8A8]"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
      />
      <span className="text-xs text-[#525252] font-normal">{inputSpan}</span>
    </div>
  );
};

export default InputField;
