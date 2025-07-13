import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { Link } from "react-router-dom";
const MenuLayout = () => {
  return (
    <main className="w-full h-full">
      <nav className="sticky z-[9] top-[66px] md:top-[100px] lg:top-0 w-full flex gap-6 bg-[#F9F9F9] py-3 ps-[30px] lg:ps-[120px] text-[16px] border-y-[1px] border-gray-300 font-[Roboto_Condensed]">
        <Link to="/menu">Menu</Link>
        <Link to="/feature">Featured</Link>
        <Link to="previous">Previous</Link>
        <Link to="favorites">Favorites</Link>
      </nav>
      <main className="w-full h-full flex justify-center">
      <aside className="w-[30%] hidden lg:flex flex-col gap-4 ps-[120px] py-[40px]">
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
      <Outlet />
      </main>
      <div className="sticky bottom-0 z-10 w-full py-[15px] border-t-[2px] border-gray-800 bg-[#1E3932] flex justify-evenly items-center mb-[1px]">
        <button className="flex justify-between items-center border-b-[2px] border-gray-500 w-[75%] md:w-[50%] lg:w-[250px] pb-2 hover:cursor-pointer">
          <aside className="flex gap-2 lg:gap-0 lg:flex-col items-baseline">
            <h1 className="text-[16px] font-medium text-gray-400">
              For item availability
            </h1>
            <h1 className="text-[16px] lg:text-[18px] font-medium lg:font-bold text-white">
              Choose a store
            </h1>
          </aside>
          <FontAwesomeIcon
            className="text-white text-[12px]"
            icon={faChevronDown}
          />
        </button>
        <FontAwesomeIcon
          className="text-white text-[30px] lg:text-[35px] hover:cursor-pointer"
          icon={faShoppingBag}
        />
      </div>
    </main>
  );
};

export default MenuLayout;
