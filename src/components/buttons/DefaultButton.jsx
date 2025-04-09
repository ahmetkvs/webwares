function DefaultButton({ children, size = "md", onClick }) {
  let sizeClasses = "px-6 py-2 text-sm";
  if (size === "sm") {
    sizeClasses = "px-4 py-1.5 text-xs";
  } else if (size === "lg") {
    sizeClasses = "px-8 py-3 text-base";
  }

  const buttonClasses =
    `inline-flex items-center justify-center font-semibold rounded-md bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition duration-200 ${sizeClasses}`
      .trim()
      .replace(/\s+/g, " ");

  return (
    <button className={buttonClasses} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default DefaultButton;
