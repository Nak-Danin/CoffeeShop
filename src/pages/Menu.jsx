import MenuCard from "../components/MenuCard";
import { menu } from "../data/drinks";
const Menu = () => {
  return (
    <main className="w-full h-full flex justify-center">
      <aside className="w-[15%] hidden lg:flex flex-col gap-4 p-[40px]">
        <h1 className="font-semibold text-[20px]">Drinks</h1>
        <ul className="flex flex-col gap-4 text-gray-600 hover:cursor-pointer text-[17px]">
          <li className="hover:text-black">Hot Coffee</li>
          <li className="hover:text-black">Cold Coffee</li>
          <li className="hover:text-black">Hot Tea</li>
          <li className="hover:text-black">Cold Tea</li>
          <li className="hover:text-black">Refreshers</li>
          <li className="hover:text-black">Frappuccino® Blended Beverage</li>
          <li className="hover:text-black">Hot Chocolate, Lemonade & More</li>
          <li className="hover:text-black">Bottled Beverages</li>
        </ul>
        <h1 className="font-semibold text-[20px]">Food</h1>
        <ul className="flex flex-col gap-4 text-gray-600 hover:cursor-pointer text-[17px]">
          <li className="hover:text-black">Breakfast</li>
          <li className="hover:text-black">Bakery</li>
          <li className="hover:text-black">Treats</li>
          <li className="hover:text-black">Lunch</li>
          <li className="hover:text-black">Snacks</li>
        </ul>
        <h1 className="font-semibold text-[20px]">At Home Coffee</h1>
        <ul className="flex flex-col gap-4 text-gray-600 hover:cursor-pointer">
          <li className="hover:text-black">Whole Bean</li>
          <li className="hover:text-black">VIA® Instant</li>
          <li className="hover:text-black">Shopping Bag</li>
        </ul>
      </aside>
      <aside className="w-[95%] lg:w-[75%] flex flex-col gap-[40px] py-[40px] px-[20px] lg:px-[50px] pe-[10px] lg:pe-[10%]">
        <h1 className="text-[26px] lg:text-[30px] font-bold">Menu</h1>
        {menu.map(({ index, title, items }) => (
          <MenuCard key={index} title={title} items={items} />
        ))}
      </aside>
    </main>
  );
};

export default Menu;
