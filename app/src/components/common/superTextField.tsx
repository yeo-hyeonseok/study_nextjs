"use client";

import { ChangeEvent, useState } from "react";

interface SuperTextFieldProps {
  id?: string;
  name?: string;
  className?: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}

export default function SuperTextField({
  id,
  name,
  className,
  value,
  required,
  readonly,
  disabled,
}: SuperTextFieldProps) {
  const [textInput, setTextInput] = useState(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  return (
    <input
      id={id}
      name={name}
      type="text"
      className={`w-full pl-1 pr-1 ${className}`}
      value={textInput}
      required={required}
      readOnly={readonly}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
