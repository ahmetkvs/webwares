function Service({ children, header, desc }) {
  return (
    <div className="mt-16 flex flex-col justify-center items-center gap-4">
      {children}
      <h3 className="text-lg text-center font-bold text-black">{header}</h3>
      <p className="text-sm text-center text-gray-600">{desc}</p>
    </div>
  );
}

export default Service;
