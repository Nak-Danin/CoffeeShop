import { Link } from "react-router-dom";
import image from "../assets/images/pagenotfound.png";
const Error = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-5 px-[10%] py-[100px] bg-[#fef7e0]">
      <h1 className="font-bold text-[25px] md:text-[30px] text-center">
        Oops! Page not found
      </h1>
      <span className="text-[18px] font-medium text-center text-gray-600 hidden md:block">
        &lt;Coffee&gt; Sorry, we couldn't find the page you're looking for.
        &lt;/Coffee&gt;
      </span>
      <img className="w-[400px] rounded-md" src={image} alt="PageNotFound" />
      <h1 className="font-semibold text-[22px] md:text-[25px]">
        What would you like to do?
      </h1>
      <ul className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center font-semibold text-[17px]">
        <Link
          className="text-green-600 md:p-2 md:bg-white rounded-md md:border"
          to="/giftcards"
        >
          Check a gift card
        </Link>
        <Link
          className="text-green-600 md:p-2 md:bg-white rounded-md md:border"
          to="/menu"
        >
          Place an Order
        </Link>
        <Link
          className="text-green-600 md:p-2 md:bg-white rounded-md md:border"
          to="/"
        >
          Go to Home page
        </Link>
      </ul>
    </main>
  );
};

export default Error;
