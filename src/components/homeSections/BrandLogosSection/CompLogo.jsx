function CompLogo({ href, src, alt }) {
  return (
    <a href={href} target="_blank">
      <img
        className="lg:w-24 w-40 h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
        src={src}
        alt={alt}
      />
    </a>
  );
}

export default CompLogo;
