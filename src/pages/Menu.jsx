import MenuCard from "../components/MenuCard";
import { menu } from "../data/drinks";
const Menu = () => {
  return (
    <aside className="w-[95%] lg:w-[70%] flex flex-col gap-[40px] py-[40px] px-[20px] lg:px-[50px] pe-[10px] lg:pe-[10%]">
      <h1 className="text-[26px] lg:text-[30px] font-bold">Menu</h1>
      {menu.map(({ index, title, items }) => (
        <MenuCard key={index} title={title} items={items} />
      ))}
    </aside>
  );
};

export default Menu;
