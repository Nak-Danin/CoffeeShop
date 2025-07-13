const GridFooter = ({
  title,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
}) => {
  return (
    <div className="w-full flex flex-col h-fit gap-[20px] hover:cursor-pointer">
      <h1 className="font-medium text-[20px]">{title}</h1>
      <ul className="flex flex-col h-fit gap-[15px] text-[17px] text-gray-600  hover:cursor-pointer">
        <li className="hover:text-black">{link1}</li>
        <li className="hover:text-black">{link2}</li>
        <li className="hover:text-black">{link3}</li>
        <li className="hover:text-black">{link4}</li>
        {link5 && <li className="hover:text-black">{link5}</li>}
        {link6 && <li className="hover:text-black">{link6}</li>}
        {link6 && <li className="hover:text-black">{link7}</li>}
      </ul>
    </div>
  );
};

export default GridFooter;
