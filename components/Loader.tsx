interface LoaderProps {
  className?: string;
  size?: number;
  weight?: number;
  color?: string;
  duration?: number;
}

export default function Loader({
  className,
  size = 50,
  weight = 5,
  color = "#4fa349",
  duration = 1,
}: LoaderProps) {
  return (
    <div
      className={`${className} animate-spin rounded-full`}
      style={{
        width: size,
        height: size,
        borderWidth: weight,
        borderStyle: "solid",
        borderColor: color,
        borderTopColor: "transparent",
        animationDuration: `${duration}s`,
      }}
    />
  );
}
