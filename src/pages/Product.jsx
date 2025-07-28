import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { sanitizeForUrl } from "../utils/url_Helper";
import cup from "../assets/images/paper cup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faStar,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
const Product = () => {
  const [size, setSize] = useState("short");
  const { id } = useParams();
  let foundItem = null;
  let category = "Unknown";
  let type = "Unknown";
  for (const product of products) {
    category = product.category;
    type = product.type;
    foundItem = product.items.find((item) => item.id == id);
    if (foundItem) break;
  }
  console.log(foundItem);
  const Linktype = sanitizeForUrl(type);
  const Linkcategory = sanitizeForUrl(category);
  return (
    <main className="w-full h-full">
      <nav className="sticky z-[9] top-[66px] md:top-[100px] lg:top-0 w-full flex flex-wrap gap-1 bg-[#F9F9F9] py-3 ps-[30px] lg:ps-[120px] text-[16px] border-y-[1px] border-gray-300 tracking-wide font-[Roboto_Condensed]">
        <Link to="/menu">Menu</Link>
        <Link to={`/menu/${Linkcategory}/${Linktype}`}> / {type}</Link>
        <span> / {foundItem.name}</span>
      </nav>
      <main className="w-full h-fit py-[30px] flex flex-col lg:flex-row bg-[#1F3933]">
        <aside className="w-full lg:w-1/2 flex justify-center">
          <img
            src={foundItem.imgsrc}
            className="w-[300px] h-[300px]"
            alt={foundItem.name}
          />
        </aside>
        <aside className="flex flex-col justify-center items-center gap-2 lg:items-baseline w-full lg:w-1/2">
          <h1 className="font-bold text-[25px] md:text-[35px] lg:text-[40px] text-white text-center lg:text-start">
            {foundItem.name}
          </h1>
          {category == "drinks" && type != "Bottled Beverages" && (
            <span className="text-gray-300 text-[25px] font-medium tracking-wide">
              {foundItem.nutrition.calories[size]} calories
            </span>
          )}
          {(category == "food" || type == "Bottled Beverages") &&
            foundItem.nutrition && (
              <span className="text-gray-300 text-[15px] lg:text-[20px] font-medium tracking-wide">
                {foundItem.nutrition.calories &&
                  ` ${foundItem.nutrition.calories} calories`}
                {foundItem.nutrition.protein &&
                  `, protein ${foundItem.nutrition.protein}g`}
                {foundItem.nutrition.fat && `, fat ${foundItem.nutrition.fat}g`}
                {foundItem.nutrition.carbs &&
                  `, carbs ${foundItem.nutrition.carbs}g`}
              </span>
            )}
          {category == "drinks" && type != "Bottled Beverages" && (
            <span className="text-gray-300 text-[25px] font-medium tracking-wide mt-5">
              $ {foundItem.price[size].toFixed(2)}
            </span>
          )}
          {(category == "at home coffee" ||
            category == "food" ||
            type == "Bottled Beverages") && (
            <span className="text-gray-300 text-[25px] font-medium tracking-wide mt-5">
              $ {foundItem.price.toFixed(2)}
            </span>
          )}
        </aside>
      </main>
      {category == "drinks" && type != "Bottled Beverages" && (
        <main className="w-full h-fit py-[30px] flex flex-col lg:flex-row bg-white text-black gap-[50px] lg:gap-0">
          <aside className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-[30px]">
            <h1 className="text-[25px] font-semibold w-[60%] md:w-[40%] lg:w-[50%] xl:w-[40%] border-b-4 border-[#D4E9E2]">
              Size options
            </h1>
            <div className="w-[60%] md:w-[40%] lg:w-[50%] xl:w-[40%] flex justify-between items-end">
              <button
                onClick={() => setSize("short")}
                className="text-center font-semibold hover:cursor-pointer"
              >
                <img
                  className={`${
                    size === "short" && "bg-[#D4E9E2] border"
                  } transform ease-in-out duration-100 h-[60px] border-green-600 rounded-full`}
                  src={cup}
                  alt=""
                />
                Short
              </button>
              <button
                onClick={() => setSize("tall")}
                className="text-center font-semibold hover:cursor-pointer"
              >
                <img
                  className={`${
                    size === "tall" && "bg-[#D4E9E2] border"
                  } transform ease-in-out duration-100 h-[70px] border-green-600 rounded-full`}
                  src={cup}
                  alt=""
                />
                Tall
              </button>
              <button
                onClick={() => setSize("grande")}
                className="text-center font-semibold hover:cursor-pointer"
              >
                <img
                  className={`${
                    size === "grande" && "bg-[#D4E9E2] border"
                  } transform ease-in-out duration-100  h-[80px] border-green-600 rounded-full`}
                  src={cup}
                  alt=""
                />
                Grande
              </button>
            </div>
            <span>
              <FontAwesomeIcon
                className="text-gray-600 me-3 text-[20px]"
                icon={faMapLocation}
              />
              Select a store to view availability
            </span>
          </aside>
          <aside className="flex flex-col justify-center items-center lg:items-baseline lg:justify-start w-full lg:w-1/2">
            <button className="px-6 py-4 rounded-full text-[20px] text-white font-semibold bg-[#234b42] lg:mt-4 hover:cursor-pointer">
              <FontAwesomeIcon
                className="me-3 text-yellow-400"
                icon={faWandSparkles}
              />
              Customize
            </button>
          </aside>
        </main>
      )}
      <main className="ps-[30px] lg:ps-[120px] w-full bg-[#1F3933] flex flex-col gap-3 py-[30px] text-[#BCC4C2]">
        <span className="text-yellow-400/90 px-1 border border-yellow-400/90 w-fit rounded-md">
          200 <FontAwesomeIcon className="text-[10px] mb-[2px]" icon={faStar} />{" "}
          item
        </span>
        <span className="w-[90%] lg:w-[40%] font-[Roboto_Condensed]">
          {foundItem.description}
        </span>
      </main>
    </main>
  );
};

export default Product;
