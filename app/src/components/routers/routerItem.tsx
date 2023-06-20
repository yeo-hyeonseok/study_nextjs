import SuperButton from "../common/superButton";

interface RouterItemProps {
  className?: string;
  label: string;
  onClick: VoidFunction;
  desc: string;
}

export default function RouterItem({
  className,
  label,
  onClick,
  desc,
}: RouterItemProps) {
  return (
    <div>
      <div
        className={`flex border border-stone-100 p-2 justify-between items-center ${className}`}
      >
        <h2 className="text-stone-100 text-xl font-semibold">{label}</h2>
        <SuperButton text="눌러보셈" onClick={onClick} />
      </div>
      <p className="text-stone-100 text-lg border border-stone-100 p-2">
        {desc}
      </p>
    </div>
  );
}
