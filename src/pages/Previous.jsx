import image from "../assets/images/previous.gif";
import { NavLink } from "react-router-dom";
const Previous = () => {
  return (
    <>
      <nav className="sticky z-[9] top-[66px] md:top-[100px] lg:top-0 w-full flex gap-6 bg-[#F9F9F9] py-3 ps-[30px] lg:ps-[120px] text-[16px] border-y-[1px] border-gray-300 font-[Roboto_Condensed]">
        <NavLink to="/menu" className={`underline-offset-5 decoration-1`}>
          Menu
        </NavLink>
        <NavLink to="/featured" className={`underline-offset-5 decoration-1`}>
          Featured
        </NavLink>
        <NavLink to="/previous" className={`underline-offset-5 decoration-1`}>
          Previous
        </NavLink>
        <NavLink to="/favorites" className={`underline-offset-5 decoration-1`}>
          Favorites
        </NavLink>
      </nav>
      <main className="w-full flex flex-col ps-[30px] md:ps-[200px] lg:ps-[300px] gap-5 py-[50px]">
        <div className="flex flex-col gap-5 w-[300px]">
          <h1 className="font-bold text-[20px] md:text-[25px]">Previous</h1>
          <img className="w-[220px]" src={image} alt="previousImage" />
          <h1 className="font-bold text-[22px] md:text-[28px]">
            When history repeats itself
          </h1>
          <span className="text-[18px] text-gray-800/80">
            Previous orders will appear here to quickly order again.
          </span>
          <div className="flex gap-3 text-[16px]">
            <button className="border-1 rounded-full py-1 px-4 font-semibold">
              Sign in
            </button>
            <button className="bg-black text-white rounded-full py-1 px-4 font-semibold">
              Join now
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Previous;
