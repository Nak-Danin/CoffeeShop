import { Link } from "react-router-dom";
const PromoBanner = ({
  img1,
  img2,
  title1,
  title2,
  detail1,
  detail2,
  btn1,
  btn2,
  path1,
  path2,
}) => {
  return (
    <main className="w-full md:w-[95%] h-fit flex flex-col md:flex-row gap-[30px] font-[Roboto_Condensed] tracking-wide">
      <aside className="w-full md:w-1/2 bg-[#006241] pb-[30px]">
        <img src={img1} alt="title1" />
        <div className="w-full flex flex-col gap-[30px] items-center mt-5">
          <h1 className="text-white font-semibold font-sans text-[25px]">
            {title1}
          </h1>
          <h1 className="text-white text-[18px] w-[90%] text-center font-sans">
            {detail1}
          </h1>
          <Link
            to={path1}
            className="px-3 py-1 border-[2px] font-sans hover:bg-gray-400/30 hover:cursor-pointer text-white font-medium rounded-lg"
          >
            {btn1}
          </Link>
        </div>
      </aside>
      <aside className="w-full md:w-1/2 bg-[#006241] pb-[30px]">
        <img src={img2} alt="title1" />
        <div className="w-full flex flex-col gap-[30px] mt-5 items-center">
          <h1 className="text-white font-semibold font-sans text-[25px]">
            {title2}
          </h1>
          <h1 className="text-white text-[18px] w-[90%] text-center font-sans">
            {detail2}
          </h1>
          <Link
            to={path2}
            className="px-3 py-1 border-[2px] font-sans hover:bg-gray-400/30 hover:cursor-pointer text-white font-medium rounded-lg"
          >
            {btn2}
          </Link>
        </div>
      </aside>
    </main>
  );
};

export default PromoBanner;
