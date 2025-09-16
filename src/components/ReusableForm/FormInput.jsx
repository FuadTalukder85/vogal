export default function FormInput({
  label,
  required,
  type = "text",
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
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="input input-bordered"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
