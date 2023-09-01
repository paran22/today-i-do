import React from "react";

interface WriteBoardTextAreaProps {
  name: string;
  display: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function WriteBoardTextArea({
  name,
  display,
  value,
  onChange,
}: WriteBoardTextAreaProps) {
  return (
    <div className="flex gap-2">
      <label className="w-20 text-center" htmlFor={name}>
        {display}
      </label>
      <textarea
        className="text-black px-2 h-20 outline-background"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
