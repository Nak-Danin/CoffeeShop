import { Link } from "react-router-dom";
const DrinkBanner = ({
  reverse,
  imgsrc,
  title,
  description,
  btn,
  bg,
  textColor,
  path,
}) => {
  return (
    <div
      className={`w-full md:w-[95%] h-auto flex flex-col ${bg} items-center justify-center md:flex-row ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <article className="w-full md:w-1/2 h-fit">
        <img src={imgsrc} alt="img" />
      </article>
      <article
        className={`w-full md:w-1/2 flex flex-col justify-center items-center gap-5 pt-[30px] pb-[50px] ${textColor} font-[Roboto_Condensed]`}
      >
        <h1 className="text-[30px] md:text-[32px] lg:text-[50px] font-semibold text-center w-[95%] md:w-[80%] lg:w-[70%] tracking-[3.5px] leading-tight">
          {title}
        </h1>
        <h1 className="text-[25px] md:text-[27px] lg:text-[28px] text-center w-[95%] md:w-[80%] lg:w-[65%]">
          {description}
        </h1>
        <Link to={path}
          className={`px-3 py-1 border-[2px] font-sans hover:bg-gray-400/30 hover:cursor-pointer ${
            textColor === "text-white" ? "border-white" : "border-black"
          } rounded-full font-semibold`}
        >
          {btn}
        </Link>
      </article>
    </div>
  );
};

export default DrinkBanner;
