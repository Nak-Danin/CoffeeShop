import { Link } from "react-router-dom";

const Card = ({ id, imgsrc, cardRef }) => {
  return (
    <Link
      to={`/giftcards/${id}`}
      className="w-[172px] md:w-[250px] lg:w-[300px] h-full flex-shrink-0 rounded-md md:rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] hover:-translate-y-[8px] transition-all duration-300 hover:cursor-pointer"
    >
      <img ref={cardRef} src={imgsrc} alt={id.toString()}></img>
    </Link>
  );
};

export default Card;
