import React, { useState, ChangeEvent } from "react";
import { Upload } from "lucide-react";

const FileUploader = ({ onUpload, onRemove }) => {
  const [uploaded, setUploaded] = useState(false);
  const [preview, setPreview] = useState("");

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // For preview only
      setUploaded(true);
      onUpload(file); // Send file to parent
    }
  };

  const handleRemove = () => {
    setPreview("");
    setUploaded(false);
    onRemove();
  };

  return (
    <>
      <label htmlFor="" className="pb-2 text-xs text-[#525252] font-semibold">
        Upload Proof of Business Ownership
      </label>
      <div className="w-full h-full relative border border-dashed py-14 rounded-xl bg-[#D9D9D9]">
        {!uploaded ? (
          <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <Upload className="w-8 h-8 text-[#000000] mb-2" />
            <span className="text-sm text-[#000000]">
              Drag and Drop to Upload
            </span>
            <span className="text-sm text-[#401A6D]">or Browse</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FileUploader;
