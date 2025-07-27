import { Link } from "react-router-dom"

const ItemCard = ({name, imgsrc, id}) => {
  return (
    <Link to={`/product/${id}`} className="flex flex-col gap-2 items-center w-full hover:cursor-pointer">
      <div className="w-[75%] md:w-[85%] lg:w-[75%] rounded-full overflow-hidden">
        <img className="w-full rounded-full scale-[1.04]" src={imgsrc} alt="img" />
      </div>
      <h1 className="text-[17px] lg:text-[20px] text-center">{name}</h1>
    </Link>
  )
}

export default ItemCard