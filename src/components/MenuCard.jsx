import FoodCard from "./FoodCard";
const MenuCard = ({ title, items }) => {
  return (
    <main className="w-full h-fit">
      <h1 className="text-[20px] lg:text-[25px] font-bold pb-[20px]">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 border-t-1 border-gray-400/40 py-[30px]">
        {items.map(({ id, name, imgsrc }) => (
          <FoodCard key={id} name={name} imgsrc={imgsrc} />
        ))}
      </div>
    </main>
  );
};

export default MenuCard;
