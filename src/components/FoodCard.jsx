const FoodCard = ({ imgsrc, name }) => {
  return (
    <main className="flex gap-5 items-center w-full">
      <div className="w-[80px] lg:w-[120px] rounded-full overflow-hidden">
        <img className="w-full rounded-full" src={imgsrc} alt="img" />
      </div>
      <h1 className="w-[80%] lg:w-[70%] text-[17px] lg:text-[20px] font-medium font-mono">{name}</h1>
    </main>
  );
};

export default FoodCard;
