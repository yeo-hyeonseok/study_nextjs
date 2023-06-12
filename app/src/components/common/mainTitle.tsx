interface MainTitleProps {
  text: string;
}

export default function MainTitle({ text }: MainTitleProps) {
  return <h2 className="text-stone-100 text-5xl font-bold mb-10">{text}</h2>;
}
