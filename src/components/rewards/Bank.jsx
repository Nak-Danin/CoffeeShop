const Bank = ({ imgsrc, detail, name }) => {
  return (
    <main className="flex md:flex-col gap-3 items-center text-[18px]">
      <img className="w-[110px]" src={imgsrc} alt={name} />
      <div className="w-[85%] flex justify-center">
        <span className="md:text-center text-[16px] font-[Roboto_Condensed]">
          <span className="underline md:text-center decoration-green-600 text-green-600 hover:cursor-pointer">
            Link your {name}
          </span>
          &nbsp;{detail}
        </span>
      </div>
    </main>
  );
};

export default Bank;
