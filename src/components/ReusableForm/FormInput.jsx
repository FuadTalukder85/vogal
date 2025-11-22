export default function FormInput({
  label,
  required,
  type = "text",
  placeholder,
  defaultValue,
  value,
  onChange,
  register,
  error,
}) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        {...register}
        className="input input-bordered"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
