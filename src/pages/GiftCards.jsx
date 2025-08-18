import { Template } from "../components";
import { cards } from "../data/giftcards";
import stackedCard from "../assets/images/GiftCards/stackedcard.png";
import businessCard from "../assets/images/GiftCards/businessCard.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons/faSquareArrowUpRight";

const GiftCards = () => {
  const featured = cards.find((c) => c.title === "FEATURED");
  const birthday = cards.find((c) => c.title === "BIRTHDAY");
  const thankyou = cards.find((c) => c.title === "THANK YOU");
  const celeb = cards.find((c) => c.title === "CELEBRATION");
  const summer = cards.find((c) => c.title === "SUMMER");
  const backtoschool = cards.find((c) => c.title === "BACK TO SCHOOL");
  const appreciation = cards.find((c) => c.title === "APPRECIATION");
  const encouragement = cards.find((c) => c.title === "ENCOURAGEMENT");
  const workplace = cards.find((c) => c.title === "WORKPLACE");
  const anytime = cards.find((c) => c.title === "ANYTIME");
  return (
    <main className="w-full h-full">
      <h1 className="font-bold text-[25px] md:text-[30px] my-[40px] mx-[3%] md:mx-[6%]">
        Gift cards
      </h1>
      <Template
        id={featured.id}
        title={featured.title}
        items={featured.items}
      />
      <div className="my-[40px] mx-[3%] md:mx-[6%] flex items-center gap-3 px-[10px] bg-[#EDEBE9] py-3 rounded-md">
        <img className="w-[70px]" src={stackedCard} alt="stackedCardPic" />
        <span className="font-medium">
          Effortlessly send up to 10 eGifts per purchase. Select a design to
          start!
        </span>
      </div>
      <article className="my-[40px] px-[3%] md:px-[6%] py-[30px] lg:py-[50px] flex flex-col lg:flex-row lg:items-center gap-3 bg-[#D4E9E2]">
        <h1 className="font-medium text-[20px] md:text-[25px]">
          Received a gift card?
        </h1>
        <h1 className="text-[16px] md:text-[18px] text-gray-600 flex items-center gap-1">
          Earn 2<FontAwesomeIcon className="text-[13px]" icon={faStar} /> per $1
        </h1>
        <div className="flex gap-3">
          <button className="px-3 py-1 rounded-full font-semibold text-[15px] md:text-[17px] border border-black hover:cursor-pointer">
            Add or Reload
          </button>
          <button className="px-3 py-1 rounded-full font-semibold text-[15px] md:text-[17px] border border-black text-white bg-black hover:bg-gray-800 hover:cursor-pointer">
            Check Balance
          </button>
        </div>
      </article>
      <Template
        id={birthday.id}
        title={birthday.title}
        items={birthday.items}
      />
      <Template
        id={thankyou.id}
        title={thankyou.title}
        items={thankyou.items}
      />
      <Template id={celeb.id} title={celeb.title} items={celeb.items} />
      <Template id={summer.id} title={summer.title} items={summer.items} />
      <Template
        id={backtoschool.id}
        title={backtoschool.title}
        items={backtoschool.items}
      />
      <Template
        id={appreciation.id}
        title={appreciation.title}
        items={appreciation.items}
      />
      <Template
        id={encouragement.id}
        title={encouragement.title}
        items={encouragement.items}
      />
      <Template
        id={workplace.id}
        title={workplace.title}
        items={workplace.items}
      />
      <Template id={anytime.id} title={anytime.title} items={anytime.items} />
      <article className="w-full my-[40px] px-[3%] md:px-[6%] py-[30px] lg:py-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-[#F9F9F9] gap-4 md:gap-6">
        <img
          className="w-[350px] md:w-[450px]"
          src={businessCard}
          alt="BusinessCard"
        />
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="font-medium text-[25px] md:text-[30px]">
            Business gifting - simplyfied
          </h1>
          <span className="w-[80%] md:w-full text-gray-600 text-[17px]">
            Bulk send physical or digital Starbucks Cards to gift, reward,
            incentivize, or show appreciation towards your customers, clients
            and team members. Minimum 15 cards per order.
          </span>
          <button className="w-fit px-3 py-1 rounded-full font-semibold text-[15px] md:text-[17px] border border-black hover:cursor-pointer">
            Shop now{" "}
            <FontAwesomeIcon
              className="text-[18px] text-gray-600"
              icon={faSquareArrowUpRight}
            />
          </button>
        </div>
      </article>
      <article className="w-full mt-[40px] px-[3%] md:px-[6%] py-[30px] lg:py-[50px] bg-[#EDEBE9] grid grid-cols-1 md:grid-cols-2 font-[Roboto_Condensed] text-[15px] md:text-[17px] gap-5">
        <aside className="flex flex-col gap-3">
          <h1 className="font-medium text-[20px] md:text-[25px]">
            About eGift cards
          </h1>
          <span>
            A Starbucks eGift card (also known as an “eGift”) is a Starbucks
            Gift Card that is purchased and sent digitally.
          </span>
          <span>
            For Senders of an eGift, go to eGift History when signed in to view,
            send, or resend eGifts you’ve purchased — or, to directly contact
            Starbucks eGift Support for help with your order.
          </span>
          <h1 className="font-medium text-[20   px] md:text-[25px]">
            Questions around eGift cards?
          </h1>
          <span>
            Check our Frequently Asked Questions — your question might already
            be answered. There, you’ll find answers for all Starbucks Gift Cards
            in general (including eGifts).
          </span>
          <button className="w-fit px-3 py-1 rounded-full font-semibold font-sans text-[15px] md:text-[17px] border border-black hover:cursor-pointer">
            Card FAQs{" "}
            <FontAwesomeIcon
              className="text-[18px] text-gray-600"
              icon={faSquareArrowUpRight}
            />
          </button>
        </aside>
        <aside className="flex flex-col gap-3">
          <h1 className="font-medium text-[20px] md:text-[25px]">
            About Starbucks Gift Cards in general
          </h1>
          <span>
            Starbucks Gift Cards, including eGifts, can be used to pay in a
            Starbucks store or to join Starbucks® Rewards.
          </span>
          <span>
            Register Gift Cards and eGifts to a Starbucks® Rewards account and
            earn 2★ per dollar every time you pay with that card. Those Stars
            quickly add up to free food, drinks, and more!
          </span>
          <button className="w-fit px-3 py-1 rounded-full font-semibold font-sans text-[15px] md:text-[17px] border border-black hover:cursor-pointer">
            Card Terms & Conditions{" "}
            <FontAwesomeIcon
              className="text-[18px] text-gray-600"
              icon={faSquareArrowUpRight}
            />
          </button>
        </aside>
      </article>
    </main>
  );
};

export default GiftCards;
