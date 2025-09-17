"use client";
import { useDropzone } from "react-dropzone";
import { AiOutlineUpload, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function FormFileUpload({
  label,
  error,
  file,
  setFile,
  initialImage,
}) {
  const [preview, setPreview] = useState(initialImage || null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile); // parent এ state update
    },
    multiple: false,
    accept: { "image/*": [] },
  });

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else if (!file && initialImage) {
      setPreview(initialImage);
    } else {
      setPreview(null);
    }
  }, [file, initialImage]);

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
        <input {...getInputProps()} />
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
