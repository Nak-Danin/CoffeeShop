import { DrinkBanner } from "../components";
import { features } from "../data/drinks";
const Feature = () => {
  return (
    <div className="flex flex-col gap-[30px] w-full h-full items-center justify-center py-[30px]">
      <h1 className="text-[30px] lg:text-[50px] text-[#1E3932] text-center lg:pb-[20px] font-bold tracking-wider">See you on the patio</h1>
      {features.map(
        ({ id, title, imgsrc, reverse, description, btn, bg, textColor }) => (
          <DrinkBanner
            key={id}
            reverse={reverse}
            imgsrc={imgsrc}
            title={title}
            description={description}
            btn={btn}
            bg={bg}
            textColor={textColor}
          />
        )
      )}
    </div>
  );
};

export default Feature;
