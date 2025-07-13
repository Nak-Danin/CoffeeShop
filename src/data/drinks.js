import d1 from "../assets/images/pic1.webp";
import d2 from "../assets/images/pic2.webp";
import d3 from "../assets/images/pic3.webp";
import d4 from "../assets/images/pic4.webp";
export const banners = [
  {
    id: 1,
    title: "Strato™ Frappuccino® beverages are here",
    imgsrc: d1,
    reverse: false,
    description:
      "Savor a rich, flavorful layer of cold foam before diving into a beautifully blended classic. Here for a limited time.",
    btn: "Order now",
    bg: "bg-[#F7F0E4]",
    textColor: "text-[#32462F]",
  },
  {
    id: 2,
    title: "See you on the patio",
    imgsrc: d2,
    reverse: true,
    description:
      "Soak up the season with Summer-Berry Refreshers and Iced Horchata Oatmilk Shaken Espresso. Enjoy these cool favorites while you can. Here for a limited time.",
    btn: "View the menu",
    bg: "bg-[#32462F]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "It starts with free",
    imgsrc: d3,
    reverse: false,
    description:
      "Enjoy a free handcrafted drink when you make a qualifying purchase during your first week as a Starbucks® Rewards member.*",
    btn: "Join now",
    bg: "bg-[#D1D1AA]",
    textColor: "text-[#32462F]",
  },
  {
    id: 4,
    title: "Our captivating new collection",
    imgsrc: d4,
    reverse: true,
    description:
      "Nigerian-American artist Shadé Akanbi blends tradition and modernity to create rich prints and patterns. For a limited time.",
    btn: "Learn more",
    bg: "bg-[#006242]",
    textColor: "text-white",
  },
];

import drink1 from "../assets/images/Menu/drink1.png";
import drink2 from "../assets/images/Menu/drink2.jpg";
import drink3 from "../assets/images/Menu/drink3.jpg";
import drink4 from "../assets/images/Menu/drink4.webp";
import drink5 from "../assets/images/Menu/drink5.jpg";
import drink6 from "../assets/images/Menu/drink6.webp";
import drink7 from "../assets/images/Menu/drink7.jpg";
import drink8 from "../assets/images/Menu/drink8.jpg";

import food1 from "../assets/images/Menu/food1.jpg";
import food2 from "../assets/images/Menu/food2.jpg";
import food3 from "../assets/images/Menu/food3.jpg";
import food4 from "../assets/images/Menu/food4.jpg";
import food5 from "../assets/images/Menu/food5.jpg";

import item1 from "../assets/images/Menu/item1.jpg";
import item2 from "../assets/images/Menu/item2.jpg";
import item3 from "../assets/images/Menu/item3.jpg";
export const menu = [
  {
    index: 1,
    title: "Drinks",
    items: [
      {
        id: 1,
        imgsrc: drink1,
        name: "Hot Coffee",
      },
      {
        id: 2,
        imgsrc: drink2,
        name: "Cold Coffee",
      },
      {
        id: 3,
        imgsrc: drink3,
        name: "Hot Tea",
      },
      {
        id: 4,
        imgsrc: drink4,
        name: "Cold Tea",
      },
      {
        id: 5,
        imgsrc: drink5,
        name: "Refreshers",
      },
      {
        id: 6,
        imgsrc: drink6,
        name: "Frappuccino® Blended Beverage",
      },
      {
        id: 7,
        imgsrc: drink7,
        name: "Hot Chocolate, Lemonade & More",
      },
      {
        id: 8,
        imgsrc: drink8,
        name: "Bottled Beverages",
      },
    ],
  },
  {
    index: 2,
    title: "Food",
    items: [
      {
        id: 9,
        imgsrc: food1,
        name: "Breakfast",
      },
      {
        id: 10,
        imgsrc: food2,
        name: "Bakery",
      },
      {
        id: 11,
        imgsrc: food3,
        name: "Treats",
      },
      {
        id: 12,
        imgsrc: food4,
        name: "Lunch",
      },
      {
        id: 13,
        imgsrc: food5,
        name: "Snacks",
      },
    ],
  },
  {
    index: 3,
    title: "At Home Coffee",
    items: [
      {
        id: 14,
        imgsrc: item1,
        name: "Whole Bean",
      },
      {
        id: 15,
        imgsrc: item2,
        name: "VIA® Instant",
      },
      {
        id: 16,
        imgsrc: item3,
        name: "Shopping Bag",
      },
    ],
  },
];
