import { useEffect, useState } from "react";

const InputForm = ({ type, placeHolder, require, getTotal }) => {
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);
  const handleOnChange = (e) => {
    const val = e.target.value;
    if (type === "number") {
      setInput(val === "" ? "" : Number(val));
    } else {
      setInput(val);
    }
    getTotal(val);
  };
  console.log(input);
  return (
    <main className="w-full relative">
      <input
        className="w-full ps-6 py-3 border border-gray-400 rounded-md focus:outline-0 text-[18px]"
        type={type}
        required={require}
        value={input}
        onChange={handleOnChange}
        min={5}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <span
        className={`absolute text-gray-900 left-4 bg-white p-1 font-[Roboto_Condensed] ${
          focus || input !== ""
            ? "top-[-14px] text-[14px]"
            : "top-1/2 -translate-y-1/2 text-[18px] z-[-1]"
        }`}
      >
        {placeHolder}
      </span>
    </main>
  );
};

export default InputForm;
