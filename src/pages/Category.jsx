import products from "../data/products"
import ItemContainer from "../components/category/ItemContainer"
import { useParams } from "react-router-dom"
const Category = () => {
    const {category, type} = useParams()
    const itemType = type.replace('-',' ');
    const filterProducts = products.filter(p => p.category === category && p.type === itemType)
  return (
    <aside className="w-[95%] lg:w-[70%] flex flex-col gap-[30px] py-[40px] px-[15px] md:px-[40px] lg:px-[50px] pe-[10px] lg:pe-[10%]">
      <h1 className="text-gray-500">Menu/<span className="text-gray-500 font-semibold">{itemType}</span></h1>
      <h1 className="text-[26px] lg:text-[30px] font-bold">{itemType}</h1>
      {filterProducts.map(({key, variety, items}) => (
        <ItemContainer key={key} items={items} variety={variety}/>
      ))}
    </aside>
  )
}

export default Category