export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full max-w-80
        px-4 py-3 rounded-xl
        body-lg text-neutral-900
        bg-primary-300
        hover:bg-primary-500
        active:bg-primary-600
        disabled:cursor-not-allowed
        disabled:bg-neutral-200
        disabled:text-neutral-900
      "
    >
      {text}
    </button>
  );
}