/** @format */

import { ValidationError } from "@formspree/react";

export default function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <label
        className="text-base md:text-lg font-medium text-amber-200"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange} // Pass the onChange handler here
        placeholder={placeholder}
        className="w-full py-2 px-4 text-base rounded-md outline-none border-2 border-transparent focus:border-[#DECBA7] bg-white text-gray-900 placeholder-gray-400 transition-all duration-300"
        required
      />
      <ValidationError prefix={label} field={name} />
    </div>
  );
}
