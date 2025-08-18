import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import Card from "./Card";
const Template = ({ id, title, items }) => {
  const containerRef = useRef();
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();
  const cardRef = useRef();
  // Scroll right
  const handleNext = () => {
    containerRef.current.scrollBy({
      left: 2 * cardRef.current.offsetWidth + 32,
      behavior: "smooth",
    });
  };

  // Scroll left
  const handlePrev = () => {
    containerRef.current.scrollBy({
      left: -(2 * cardRef.current.offsetWidth + 32),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = containerRef.current;

    const checkButtons = () => {
      if (slider.scrollLeft === 0) prevBtnRef.current.classList.add("hidden");
      else prevBtnRef.current.classList.remove("hidden");

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 32)
        nextBtnRef.current.classList.add("hidden");
      else nextBtnRef.current.classList.remove("hidden");
    };

    checkButtons(); // initial check

    slider.addEventListener("scroll", checkButtons);
    window.addEventListener("resize", checkButtons);

    return () => {
      slider.removeEventListener("scroll", checkButtons);
      window.removeEventListener("resize", checkButtons);
    };
  }, []);

  return (
    <div key={id} className="w-full flex flex-col gap-5 mt-[30px]">
      <span className="text-[16px] font-bold mx-[3%] md:mx-[6%]">{title}</span>
      <main className="w-full overflow-hidden relative">
        <div
          ref={containerRef}
          className="w-full h-[120px] md:h-[180px] lg:h-[200px] py-1 lg:py-3 overflow-x-auto flex gap-4 lg:gap-8 px-[3%] md:px-[6%]"
        >
          {items.map(({ id, imgsrc }) => (
            <Card key={id} id={id} imgsrc={imgsrc} cardRef={cardRef} />
          ))}
        </div>
        {/* Prev Button */}
        <button ref={prevBtnRef} onClick={handlePrev}>
          <FontAwesomeIcon
            className="absolute left-[2px] top-[40%] -translate-y-[40%] bg-white px-4 py-3 text-gray-600 rounded-full shadow shadow-gray-600 cursor-pointer hidden text-[16px]"
            icon={faChevronLeft}
          />
        </button>

        {/* Next Button */}
        <button ref={nextBtnRef} onClick={handleNext}>
          <FontAwesomeIcon
            className="absolute right-[8px] top-[40%] -translate-y-[40%] bg-white px-4 py-3 text-gray-600 rounded-full shadow shadow-gray-600 cursor-pointer text-[16px]"
            icon={faChevronRight}
          />
        </button>
      </main>
    </div>
  );
};

export default Template;
