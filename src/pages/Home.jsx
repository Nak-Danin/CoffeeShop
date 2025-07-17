import { DrinkBanner, PromoBanner } from "../components";
import { banners } from "../data/drinks";
import { promo } from "../data/drinks";
const Home = () => {
  return (
    <div className="flex flex-col gap-[30px] w-full h-full items-center justify-center pt-[30px]">
      {promo.map(
        ({
          id,
          img1,
          img2,
          title1,
          title2,
          detail1,
          detail2,
          btn1,
          btn2,
          path1,
          path2,
        }) => (
          <PromoBanner
            key={id}
            img1={img1}
            img2={img2}
            title1={title1}
            title2={title2}
            detail1={detail1}
            detail2={detail2}
            btn1={btn1}
            btn2={btn2}
            path1={path1}
            path2={path2}
          />
        )
      )}
      {banners.map(
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
      <div className="flex justify-center py-[40px] font-[Roboto_Condensed] tracking-wide">
        <span className="lg:w-[50%] md:w-[70%] w-[90%] text-[15px] font-medium text-center">
          *Valid for new Starbucks Rewards members for 7 days from sign up.
          Coupon will be available in the offers tab of your Starbucks app
          following sign up and may take up to 48 hours to arrive. Good at
          participating U.S. stores for a handcrafted menu-sized beverage with
          qualifying purchase ($8 max value). Qualifying purchase excludes
          alcohol, Starbucks Card and Card reloads. Limit one. Cannot be
          combined with other offers or discounts. Excludes delivery services.
          Sign up by 9/28/2025.
        </span>
      </div>
    </div>
  );
};

export default Home;
