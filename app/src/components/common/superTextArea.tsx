"use client";

import { ChangeEvent, useState } from "react";

interface SuperTextAreaProps {
  id?: string;
  name?: string;
  rows?: number;
  cols?: number;
  className?: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}

export default function SuperTextArea({
  id,
  name,
  rows,
  cols,
  className,
  value,
  required,
  readonly,
  disabled,
}: SuperTextAreaProps) {
  const [textInput, setTextInput] = useState(value);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      className={`w-full pl-1 pr-1 ${className}`}
      defaultValue={textInput}
      required={required}
      readOnly={readonly}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
