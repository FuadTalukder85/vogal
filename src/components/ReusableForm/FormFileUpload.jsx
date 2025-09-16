"use client";
import { useDropzone } from "react-dropzone";
import { AiOutlineUpload, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function FormFileUpload({ label, register, error, setFile }) {
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFile(file); // Parent component e state update
      setPreview(URL.createObjectURL(file));
    },
    multiple: false,
    accept: { "image/*": [] },
  });

  const handleRemove = () => {
    setPreview(null);
    setFile(null);
  };

  useEffect(() => {
    // Cleanup URL object
    return () => preview && URL.revokeObjectURL(preview);
  }, [preview]);

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-300 p-6 rounded-md cursor-pointer flex flex-col items-center justify-center ${
          isDragActive ? "border-blue-500 bg-blue-50" : ""
        }`}
      >
        <input {...getInputProps()} {...register} />
        <AiOutlineUpload className="text-4xl text-gray-400 mb-2" />
        <p className="text-gray-500 text-center">
          Drop your image here, or click to browse
        </p>
      </div>

      {preview && (
        <div className="relative mt-3 w-2/3 h-48 mx-auto">
          <img
            src={preview}
            alt="preview"
            className="object-contain w-full h-full rounded border"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
          >
            <AiOutlineClose />
          </button>
        </div>
      )}

      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
