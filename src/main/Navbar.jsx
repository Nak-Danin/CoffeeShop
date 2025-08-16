import { faBars, faMapLocation, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [toggle]);
  return (
    <>
      <nav className="flex sticky top-0 lg:static w-full justify-between items-center lg:px-9 md:px-5 px-3 py-3 md:py-6 border-y-[1px] border-gray-200 shadow shadow-gray-400/50 bg-white z-[1000]">
        <aside className="flex gap-[30px] items-center text-[15px] font-sans tracking-wider">
          <Link to="/">
            <img className="w-[40px] md:w-[50px] me-1" src={logo} alt="logo" />
          </Link>
          <NavLink
            to="menu"
            className="font-bold hidden md:block decoration-green-600 underline-offset-[15px] decoration-3"
          >
            MENU
          </NavLink>
          <NavLink
            to="rewards"
            className="font-bold hidden md:block decoration-green-600 underline-offset-[15px] decoration-3"
          >
            REWARDS
          </NavLink>
          <NavLink
            to="giftcard"
            className="font-bold hidden md:block decoration-green-600 underline-offset-[15px] decoration-3"
          >
            GIFT CARDS
          </NavLink>
        </aside>
        <aside className="md:flex gap-4 h-fit text-[16px] hidden">
          <button className="flex gap-2 items-center font-semibold me-[20px]">
            <FontAwesomeIcon className="text-[15px]" icon={faMapLocation} />
            <span>Find a store</span>
          </button>
          <button className="border-1 rounded-full py-1 px-3 font-semibold hover:bg-gray-400/30 hover:cursor-pointer">
            Sign in
          </button>
          <button className="bg-black text-white rounded-full py-1 px-3 font-semibold hover:cursor-pointer">
            Join now
          </button>
        </aside>
        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon
            className="text-gray-500 text-[22px] me-3"
            icon={toggle ? faX : faBars}
          ></FontAwesomeIcon>
        </button>
      </nav>
      {toggle && (
        <div className="bg-black/30 fixed top-0 left-0 z-10 w-full h-full"></div>
      )}
      <aside
        className={`w-[80%] h-screen flex flex-col gap-[40px] bg-white transition-transform ease-in-out duration-400 text-[18px] fixed right-0 z-50 py-[40px] px-[30px] font-medium ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link onClick={() => setToggle(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setToggle(false)} to="menu">
          Menu
        </Link>
        <Link onClick={() => setToggle(false)} to="rewards">
          Rewards
        </Link>
        <Link onClick={() => setToggle(false)} to="giftcard">
          Gift Cards
        </Link>
        <span className="w-full border-[1px] border-gray-400"></span>
        <div className="flex gap-3 text-[16px]">
          <button className="border-1 rounded-full py-1 px-3 font-semibold">
            Sign in
          </button>
          <button className="bg-black text-white rounded-full py-1 px-3 font-semibold">
            Join now
          </button>
        </div>
        <button className="flex gap-2 items-center font-semibold me-2 text-[16px]">
          <FontAwesomeIcon className="text-[20px]" icon={faMapLocation} />
          <span>Find a store</span>
        </button>
      </aside>
    </>
  );
};

export default Navbar;
