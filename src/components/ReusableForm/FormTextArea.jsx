export default function FormTextArea({
  label,
  required,
  placeholder,
  register,
  error,
}) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">
          {label} {required && <span className="text-red-500 text-lg">*</span>}
        </span>
      </label>
      <textarea
        placeholder={placeholder}
        {...register}
        className="textarea textarea-bordered"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
