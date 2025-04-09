interface Props {
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({
  className,
  name,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <input
      className={`${className} bg-primary-dark p-2 text-xl`}
      onChange={onChange}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}
