import SuperButton from "../common/superButton";

interface SuperItemCardProps {
  className?: string;
  label: string;
  desc: string;
  isButton?: boolean;
  onClickButton?: VoidFunction;
}

export default function SuperItemCard({
  className,
  label,
  desc,
  isButton,
  onClickButton,
}: SuperItemCardProps) {
  return (
    <div>
      <div
        className={`flex border border-stone-100 p-2 justify-between items-center ${className}`}
      >
        <h2 className="text-stone-100 text-xl font-semibold">{label}</h2>
        {isButton && <SuperButton text="눌러보셈" onClick={onClickButton} />}
      </div>
      <p className="text-stone-100 text-lg border border-stone-100 p-2">
        {desc}
      </p>
    </div>
  );
}
