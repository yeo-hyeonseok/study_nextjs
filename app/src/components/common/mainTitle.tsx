interface MainTitleProps {
  className: string;
  text: string;
}

export default function MainTitle({ className, text }: MainTitleProps) {
  return (
    <h2 className={`text-stone-100 text-5xl font-bold ${className}`}>{text}</h2>
  );
}
