import { Link } from "react-router-dom";
import { sanitizeForUrl } from "../utils/url_Helper";
const FoodCard = ({ imgsrc, name, category }) => {
  const cleanName = sanitizeForUrl(name);
  return (
    <Link
      to={`${sanitizeForUrl(category)}/${cleanName}`}
      className="flex gap-5 items-center w-full hover:cursor-pointer"
    >
      <div className="w-[100px] lg:w-[120px] rounded-full overflow-hidden">
        <img className="w-full rounded-full" src={imgsrc} alt="img" />
      </div>
      <h1 className="w-[80%] lg:w-[70%] text-[17px] lg:text-[20px] font-medium font-mono">
        {name}
      </h1>
    </Link>
  );
};

export default FoodCard;
