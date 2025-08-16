const ExtraBanner = ({ imgsrc, title, detail }) => {
  return (
    <div className="flex md:flex-col gap-3 items-center text-[18px]">
      <img className="w-[110px]" src={imgsrc} alt={title} />
      <div className="w-[85%] flex flex-col gap-2">
        <span className="w-full md:text-center font-semibold">{title}</span>
        <span className="md:text-center text-[16px] font-[Roboto_Condensed]">
          {detail}
        </span>
        <button className="md:text-center text-start text-[16px] font-[Roboto_Condensed] underline decoration-green-600 text-green-600">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ExtraBanner;
