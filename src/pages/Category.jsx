import products from "../data/products";
import ItemContainer from "../components/category/ItemContainer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Category = () => {
  const { category, type } = useParams();
  const itemType = type.replace(/-/g, " ");
  const cate = category.replace(/-/g, " ");
  const filterProducts = products.filter(
    (p) => p.category === cate && p.type === itemType
  );
  return (
    <aside className="w-[95%] lg:w-[70%] flex flex-col gap-[30px] py-[40px] px-[15px] md:px-[40px] lg:px-[50px] pe-[10px] lg:pe-[10%]">
      <div className="flex gap-1">
        <Link to="/menu" className="text-gray-500">
          Menu /
        </Link>
        <span className="text-gray-500 font-semibold">{itemType}</span>
      </div>
      <h1 className="text-[26px] lg:text-[30px] font-bold">{itemType}</h1>
      {filterProducts.map(({ key, variety, items }) => (
        <ItemContainer key={key} items={items} variety={variety}/>
      ))}
    </aside>
  );
};

export default Category;
