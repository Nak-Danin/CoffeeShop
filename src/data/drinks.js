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
    path: "menu/drinks/Frappuccino®-Blended-Beverage",
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
    path: "menu/drinks/Cold-Coffee",
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
    path: "rewards",
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
    path: "/",
  },
];

import f1 from "../assets/images/Feature/feature1.jpg";
import f2 from "../assets/images/Feature/feature2.webp";
import f3 from "../assets/images/Feature/feature3.jpg";
import f4 from "../assets/images/Feature/feature4.jpg";
import f5 from "../assets/images/Feature/feature5.jpg";

export const features = [
  {
    id: 1,
    title: "New Strato™ Frappuccino® Blended Beverages",
    imgsrc: f1,
    reverse: false,
    description:
      "The first-ever Frappuccino® Beverages with rich, flavorful cold foam layered atop a beautifully blended classic, in Brown Sugar, Salted Caramel Mocha and Strawberry Matcha. Here for a limited time.",
    btn: "Order now",
    bg: "bg-[#D1D1AA]",
    textColor: "text-[#32462F]",
    path: "/menu/product/85",
  },
  {
    id: 2,
    title: "Iced Horchata Oatmilk Shaken Espresso",
    imgsrc: f2,
    reverse: true,
    description:
      "Boldly refreshing with Starbucks® Blonde Espresso, cinnamon, vanilla and rice-flavored horchata syrup, and a splash of creamy oatmilk.",
    btn: "Order now",
    bg: "bg-[#D1D1AA]",
    textColor: "text-[#32462F]",
    path: "/menu/product/35",
  },
  {
    id: 3,
    title: "Salted Caramel Cream Cold Brew and Vanilla Sweet Cream Cold Brew",
    imgsrc: f3,
    reverse: false,
    description:
      "Our signature cold brew with vanilla syrup and topped with either Salted Caramel Cream Cold Foam or Vanilla Sweet Cream.",
    btn: "Order now",
    bg: "bg-[#D1D1AA]",
    textColor: "text-[#32462F]",
    path: "/menu/product/25",
  },
  {
    id: 4,
    title: "Cool Summer-Berry Refreshers",
    imgsrc: f4,
    reverse: true,
    description:
      "Nigerian-American artist Shadé Akanbi blends tradition and modernity to create rich prints and patterns. For a limited time.",
    btn: "Order now",
    bg: "bg-[#32462F]",
    textColor: "text-white",
    path: "/menu/product/78",
  },
  {
    id: 5,
    title: "Crispy Grilled Cheese on Sourdough",
    imgsrc: f5,
    reverse: false,
    description:
      "Filled with melty white Cheddar and mozzarella goodness for savory satisfaction and 21 grams of protein.",
    btn: "Order now",
    bg: "bg-[#32462F]",
    textColor: "text-white",
    path: "/menu/product/151",
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
        category: "drinks",
        name: "Hot Coffee",
      },
      {
        id: 2,
        imgsrc: drink2,
        category: "drinks",
        name: "Cold Coffee",
      },
      {
        id: 3,
        imgsrc: drink3,
        category: "drinks",
        name: "Hot Tea",
      },
      {
        id: 4,
        imgsrc: drink4,
        category: "drinks",
        name: "Cold Tea",
      },
      {
        id: 5,
        imgsrc: drink5,
        category: "drinks",
        name: "Refreshers",
      },
      {
        id: 6,
        imgsrc: drink6,
        category: "drinks",
        name: "Frappuccino® Blended Beverage",
      },
      {
        id: 7,
        imgsrc: drink7,
        category: "drinks",
        name: "Hot Chocolate, Lemonade & More",
      },
      {
        id: 8,
        imgsrc: drink8,
        category: "drinks",
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
        category: "food",
        name: "Breakfast",
      },
      {
        id: 10,
        imgsrc: food2,
        category: "food",
        name: "Bakery",
      },
      {
        id: 11,
        imgsrc: food3,
        category: "food",
        name: "Treats",
      },
      {
        id: 12,
        imgsrc: food4,
        category: "food",
        name: "Lunch",
      },
      {
        id: 13,
        imgsrc: food5,
        category: "food",
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
        category: "at home coffee",
        name: "Whole Bean",
      },
      {
        id: 15,
        imgsrc: item2,
        category: "at home coffee",
        name: "VIA® Instant",
      },
      {
        id: 16,
        imgsrc: item3,
        category: "at home coffee",
        name: "Shopping Bag",
      },
    ],
  },
];

import promo1 from "../assets/images/promo1.jpg";
import promo2 from "../assets/images/promo2.jpg";

export const promo = [
  {
    id: 1,
    img1: promo1,
    title1: "The secret menu just dropped",
    detail1:
      "We're letting members in on our top drink customizations. Only in the Starbucks® app.*",
    btn1: "Join Starbucks Rewards",
    path1: "rewards",
    img2: promo2,
    title2: "Think your drink’s a winner?",
    detail2:
      "From July 14–20, submit your favorite customization for a chance to get it featured on the secret menu and win a $25,000 grand prize.**",
    btn2: "Learn More",
    path2: "giftcards",
  },
];
