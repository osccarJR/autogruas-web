export function ImageWithFallback({
  src,
  alt,
  fallback = "/placeholder.png",
  className = "",
}) {
  return (
    <img
      src={src}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
      alt={alt}
      className={className}
    />
  );
}

export default ImageWithFallback;
