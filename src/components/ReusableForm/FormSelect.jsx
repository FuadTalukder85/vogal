export default function FormSelect({
  label,
  required,
  defaultValue,
  options,
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

      <select
        {...register}
        className="select select-bordered w-full"
        defaultValue={defaultValue || ""}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
