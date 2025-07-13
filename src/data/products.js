import hc1 from "../assets/images/Hot Coffee/p1.jpg";
import hc2 from "../assets/images/Hot Coffee/p2.jpg";
import hc3 from "../assets/images/Hot Coffee/p3.jpg";
export const products = [
  {
    key: 1,
    category: "drinks",
    type: "Hot Coffee",
    variety: "Brewed Coffee",
    items: [
      {
        id: 1,
        name: "Blonde Roast - Sunsera",
        imgsrc: hc1,
      },
      {
        id: 2,
        name: "Medium Roast - Pike Place® Roast ",
        imgsrc: hc3,
      },
      {
        id: 3,
        name: "Dark Roast - Sumatra ",
        imgsrc: hc1,
      },
      {
        id: 4,
        name: "Dark Roast - Sumatra ",
        imgsrc: hc3,
      },
      {
        id: 5,
        name: "Decaf Roast - Pike Place® Roast",
        imgsrc: hc1,
      },
      {
        id: 6,
        name: "Caffè Misto",
        imgsrc: hc2,
      },
    ],
  },
];

export default products;
