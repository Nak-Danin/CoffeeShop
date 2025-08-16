const EarnStars = ({ imgsrc, title, detail }) => {
  return (
    <main className="w-full flex gap-4">
      <img className="w-[120px] h-[160px]" src={imgsrc} alt="" />
      <div className="w-[90%] flex flex-col gap-3 text-[18px]">
        <h1 className="font-semibold">{title}</h1>
        <span className="text-[16px]">{detail}</span>
      </div>
    </main>
  );
};

export default EarnStars;
