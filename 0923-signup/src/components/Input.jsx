export default function Input({
  label,
  name,
  type = "text",
  value = "",
  onChange,
  placeholder,
  disabled = false,
}) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="body-sm text-neutral-400">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="
          w-full px-4 py-3 rounded-xl border-2 border-transparent body-md outline-none
          bg-primary-100 text-primary-600 placeholder:text-primary-600
          focus:border-primary-600
          disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-900
        "
      />
    </label>
  );
}