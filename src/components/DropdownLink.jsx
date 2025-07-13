import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const DropdownLink = ({
  title,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
}) => {
  const [drop, setDrop] = useState(false);
  return (
    <main className="w-full h-fit flex flex-col gap-[20px]">
      <button
        onClick={() => setDrop(!drop)}
        className="flex w-full justify-between  hover:cursor-pointer text-[18px]"
      >
        <h1 className="font-medium">{title}</h1>
        <FontAwesomeIcon
          className={`duration-300 ${drop ? "rotate-180" : "rotate-0"}`}
          icon={faChevronDown}
        />
      </button>
      <ul
        className={`${
          drop ? "h-fit block" : "h-0 hidden"
        } duration-300 flex flex-col gap-[15px] text-[17px] text-gray-500 hover:cursor-pointer`}
      >
        <li className="hover:text-[#212121]">{link1}</li>
        <li className="hover:text-[#212121]">{link2}</li>
        <li className="hover:text-[#212121]">{link3}</li>
        <li className="hover:text-[#212121]">{link4}</li>
        {link5 && <li className="hover:text-[#212121]">{link5}</li>}
        {link6 && <li className="hover:text-[#212121]">{link6}</li>}
        {link6 && <li className="hover:text-[#212121]">{link7}</li>}
      </ul>
    </main>
  );
};

export default DropdownLink;
