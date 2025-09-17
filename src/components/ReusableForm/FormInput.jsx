export default function FormInput({
  label,
  required,
  type = "text",
  placeholder,
  defaultValue,
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
        defaultValue={defaultValue}
        {...register}
        className="input input-bordered"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
