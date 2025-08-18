import { useEffect, useState } from "react";
import { DrinkBanner, ExtraBanner, EarnStars, Bank } from "../components";
import banner from "../assets/images/rewardBanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { banners, extras, earnStars, banks } from "../data/rewards";
const Reward = () => {
  const [position, setPosition] = useState("20%");
  const [index, setIndex] = useState(0);
  const handleButtonOnclick = (pos, index) => {
    setPosition(pos);
    setIndex(index);
  };
  useEffect(
    () => {
      handleButtonOnclick;
    },
    [position],
    [index]
  );
  const display = banners.find((b) => b.id === index);
  const upperEarnStar = earnStars.slice(0, 2);
  const lowerEarnStar = earnStars.slice(2, 4);
  return (
    <main className="w-full h-full flex flex-col gap-[50px] justify-center items-center md:pt-[30px]">
      <DrinkBanner
        reverse={true}
        imgsrc={banner}
        title="It’s a great day for free coffee"
        description="Sign up and start enjoying the perks of Starbucks® Rewards."
        btn="Join now"
        bg="bg-[#FBF5E8]"
        textColor="text-[#32462F]"
      />
      <article className="flex flex-col gap-3 py-[30px] w-full px-[20px] lg:px-[80px]">
        <h1 className="w-full text-center text-[25px] md:text-[30px] font-semibold">
          Getting started is easy
        </h1>
        <span className="w-full text-center text-[16px] md:text-[20px] font-[Roboto_Condensed]">
          Earn Stars and get rewarded in a few easy steps.
        </span>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-4 py-[30px] text-[18px]">
          <div className="flex md:flex-col gap-3 items-center">
            <span className="w-[40px] h-[40px] rounded-full border-2 border-green-600 text-green-700 flex items-center justify-center font-semibold text-[20px]">
              1
            </span>
            <div className="w-[85%] flex flex-col gap-2">
              <span className="w-full md:text-center font-semibold">
                Create an account
              </span>
              <span className="md:text-center text-[16px] font-[Roboto_Condensed]">
                To get started,{" "}
                <span className="text-green-700 underline decoration-green-600 hover:cursor-pointer">
                  join now.
                </span>{" "}
                You can also{" "}
                <span className="text-green-700 underline decoration-green-600 hover:cursor-pointer">
                  Join in the app
                </span>{" "}
                to get access to the full range of Starbucks® Rewards benefits.
              </span>
            </div>
          </div>
          <div className="flex md:flex-col gap-3 items-center">
            <span className="w-[40px] h-[40px] rounded-full border-2 border-green-600 text-green-700 flex items-center justify-center font-semibold text-[20px]">
              2
            </span>
            <div className="w-[85%] flex flex-col gap-2">
              <span className="w-full md:text-center font-semibold">
                Order and pay how you’d like
              </span>
              <span className="md:text-center text-[16px] font-[Roboto_Condensed]">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.{" "}
                <span className="text-green-700 underline decoration-green-600 hover:cursor-pointer">
                  Learn how
                </span>
              </span>
            </div>
          </div>
          <div className="flex md:flex-col gap-3 items-center">
            <span className="w-[40px] h-[40px] rounded-full border-2 border-green-600 text-green-700 flex items-center justify-center font-semibold text-[20px]">
              3
            </span>
            <div className="w-[85%] flex flex-col gap-2">
              <span className="w-full md:text-center font-semibold">
                Earn Stars, get Rewards
              </span>
              <span className="md:text-center text-[16px] font-[Roboto_Condensed]">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </span>
            </div>
          </div>
        </main>
      </article>
      <article className="w-full flex flex-col justify-center items-center bg-[#F1F8F5]">
        <h1 className="font-semibold text-[25px] md:text-[30px] py-[50px]">
          Get your favorites for free
        </h1>
        <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[40%] flex justify-evenly text-[20px] md:text-[25px] font-semibold tracking-wide pb-2">
          <button
            className="hover:cursor-pointer"
            onClick={() => handleButtonOnclick("10%", 0)}
          >
            25
            <FontAwesomeIcon
              className="text-orange-500 text-[10px]"
              icon={faStar}
            />
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() => handleButtonOnclick("110%", 1)}
          >
            100
            <FontAwesomeIcon
              className="text-orange-500 text-[10px]"
              icon={faStar}
            />
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() => handleButtonOnclick("220%", 2)}
          >
            200
            <FontAwesomeIcon
              className="text-orange-500 text-[10px]"
              icon={faStar}
            />
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() => handleButtonOnclick("320%", 3)}
          >
            300
            <FontAwesomeIcon
              className="text-orange-500 text-[10px]"
              icon={faStar}
            />
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() => handleButtonOnclick("420%", 4)}
          >
            400
            <FontAwesomeIcon
              className="text-orange-500 text-[10px]"
              icon={faStar}
            />
          </button>
        </div>
        <span className="relative w-full md:w-[68%] lg:w-[58%] xl:w-[38%] pb-1">
          <span
            style={{ translate: position }}
            className={`w-[18%] bg-[#00754A] absolute h-[5px] transition duration-500`}
          ></span>
        </span>
        <main className="w-full h-[420px] md:h-[300px] bg-[#D4E9E2] flex flex-col md:flex-row justify-center items-center gap-[30px] lg:gap-[50px]">
          <img className="w-[300px]" src={display.imgsrc} alt="" />
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-semibold text-[22px] md:text-[25px] text-center md:text-start w-[350px]">
              {display.title}
            </h1>
            <span className="w-[350px] text-center md:text-start text-[16px]">
              {display.detail}
            </span>
          </div>
        </main>
      </article>
      <article className="flex flex-col items-center gap-3 py-[30px] w-full px-[20px] lg:px-[80px]">
        <h1 className="w-full text-center text-[25px] md:text-[30px] font-semibold">
          Endless Extras
        </h1>
        <span className="w-full md:w-[80%] lg:w-[50%] text-center text-[16px] md:text-[20px] font-[Roboto_Condensed]">
          Joining Starbucks® Rewards means unlocking access to benefits like
          quick and easy ordering, tasty Rewards and—yes, free coffee.
        </span>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-5 py-[30px]">
          {extras.map(({ id, imgsrc, title, detail }) => (
            <ExtraBanner
              key={id}
              imgsrc={imgsrc}
              title={title}
              detail={detail}
            />
          ))}
        </main>
      </article>
      <article className="flex flex-col items-center gap-3 py-[50px] w-full px-[20px] lg:px-[80px] bg-[#F2F0EB]">
        <h1 className="w-full text-center text-[25px] md:text-[30px] font-semibold">
          Cash or card, you earn Stars
        </h1>
        <span className="w-full md:w-[80%] lg:w-[50%] text-center text-[16px] md:text-[20px] font-[Roboto_Condensed]">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </span>
        <aside className="flex flex-col w-full pt-[30px] lg:hidden">
          <h1 className="font-medium text-[20px] md:text-[25px]">
            1 <FontAwesomeIcon className="text-[13px] mb-1" icon={faStar} /> per
            dollar
          </h1>
          <span className="text-[16px]">Pay as you go</span>
        </aside>
        <main className="grid gap-[20px] grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr_2fr] py-[30px] lg:py-[50px] border-b border-gray-300">
          <aside className="lg:flex flex-col gap3 hidden">
            <h1 className="font-medium text-[20px] md:text-[25px]">
              1 <FontAwesomeIcon className="text-[13px] mb-1" icon={faStar} />{" "}
              per dollar
            </h1>
            <span className="text-[16px]">Pay as you go</span>
          </aside>
          {upperEarnStar.map(({ id, title, imgsrc, detail }) => (
            <EarnStars key={id} title={title} imgsrc={imgsrc} detail={detail} />
          ))}
        </main>
        <aside className="flex flex-col w-full pt-[30px] lg:hidden">
          <h1 className="font-medium text-[20px] md:text-[25px]">
            2 <FontAwesomeIcon className="text-[13px] mb-1" icon={faStar} /> per
            dollar
          </h1>
          <span className="text-[16px]">Add funds in the app</span>
        </aside>
        <main className="grid gap-[20px] grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr_2fr] pt-[30px] lg:py-[50px]">
          <aside className="lg:flex flex-col gap3 hidden">
            <h1 className="font-medium text-[20px] md:text-[25px]">
              2 <FontAwesomeIcon className="text-[13px] mb-1" icon={faStar} />{" "}
              per dollar
            </h1>
            <span className="text-[16px]">Add funds in the app</span>
          </aside>
          {lowerEarnStar.map(({ id, title, imgsrc, detail }) => (
            <EarnStars key={id} title={title} imgsrc={imgsrc} detail={detail} />
          ))}
        </main>
      </article>
      <article className="w-full flex flex-col items-center gap-3 py-[30px] px-[20px] lg:px-[80px] bg-[#D4E9E2] m-auto">
        <h1 className="w-full text-center text-[25px] md:text-[30px] font-semibold">
          Keep the Rewards Coming
        </h1>
        <span className="w-full text-center text-[16px] md:text-[20px] font-[Roboto_Condensed]">
          The Rewards don't stop at your morning coffee. Join Starbucks® Rewards
          and unlock perks from our partners, all while earning more Stars.
        </span>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-5 py-[30px]">
          {banks.map(({ id, name, imgsrc, detail }) => (
            <Bank key={id} name={name} imgsrc={imgsrc} detail={detail} />
          ))}
        </main>
        <button className="px-4 py-2 bg-green-800 rounded-full text-white font-medium hover:cursor-pointer">
          Join Starbucks Rewards
        </button>
      </article>
      <article className="w-full flex flex-col ps-[3%] md:ps-[20%] justify-center gap-4 font-[Roboto_Condensed]">
        <h1 className="text-[25px] md:text-[30px] font-semibold">Questions?</h1>
        <span className="text-[16px] w-[97%] md:w-[70%] xl:w-[60%]">
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked terms{" "}
          <span className="text-green-800 underline decoration-green-800">
            right over here
          </span>{" "}
          .
        </span>
      </article>
      <article className="w-full flex flex-col items-center gap-5 py-[30px] px-[20px] lg:px-[80px] bg-[#F9F9F9] font-[Roboto_Condensed]">
        <main className="flex flex-col gap-3 text-[16px]">
          <span>At participating stores. Restrictions apply.</span>
          <span>
            Excludes taxes and gratuities. At participating stores. Some
            restrictions apply. Flights purchased close to departure may not
            earn double Stars. Stars and miles may not be earned on purchases of
            alcohol, Starbucks Cards and Starbucks Card reloads. For details,
            visit{" "}
            <span className="text-green-800 underline decoration-green-800">
              {" "}
              deltastarbucks.com/terms .↩
            </span>
          </span>
          <span>
            At participating stores only. Some restrictions apply. Linked Card
            members will earn 2% Cash Back on the full purchase price of every
            Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars
            may not be earned on purchases of alcohol or on reloads of Starbucks
            Cards that are not registered. For details, visit{" "}
            <span className="text-green-800 underline decoration-green-800">
              Terms and Conditions
            </span>{" "}
            . Bank of America, N.A. Member FDIC.↩
          </span>
          <span>
            Individuals must link loyalty program accounts to participate in
            offer. Members with linked accounts will earn: (a) double Starbucks
            Rewards Stars on Qualifying Starbucks Transactions during Eligible
            Stays at Participating Marriott Bonvoy Hotels, excluding stays at
            Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht
            Collection, and (b) earn 100 Marriott Bonvoy Points upon completion
            of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week.
            Qualifying Starbucks Transactions must be made at U.S. participating
            Starbucks stores and exclude purchases of alcoholic beverages,
            Starbucks Card eGifts and physical Starbucks gift. To earn Double
            Stars, the applicable stay must qualify as an Eligible Stay at a
            Participating Marriott Bonvoy® Hotel under offer terms and
            conditions. Other restrictions and exclusions apply. For full offer
            terms and conditions, visit{" "}
            <span className="text-green-800 underline decoration-green-800">
              Starbucks.com/MarriottBonvoy
            </span>{" "}
            . Marriott Bonvoy® and its affiliated brands and hotels are the
            registered trademarks and/or service marks of Marriott
            International, Inc. and its affiliates. Used under license from
            Marriott International, Inc.↩
          </span>
        </main>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <aside className="flex flex-col gap-3 text-[16px]">
            <h1 className="text-gray-600/90 font-bold">EARNING STARS</h1>
            <span>
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </span>
            <span>
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </span>
            <span>
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </span>
          </aside>
          <aside className="flex flex-col gap-5 text-[16px]">
            <main className="flex flex-col gap-3">
              <h1 className="text-gray-600/90 font-bold">TERM OF USE</h1>
              <span>
                For full program details visit{" "}
                <span className="text-green-800 underline decoration-green-800">
                  starbucks.com/rewards/terms
                </span>{" "}
              </span>
              <span>
                Starbucks® Rewards benefits are available at participating
                Starbucks stores. Not all stores have the ability to honor
                Rewards at this time. Visit the{" "}
                <span className="text-green-800 underline decoration-green-800">
                  Starbucks Store Locator
                </span>{" "}
                and search for locations honoring “Redeem Rewards”.
              </span>
            </main>
            <main className="flex flex-col gap-3">
              <h1 className="text-gray-600/90 font-bold">REDEEING REWARDS</h1>
              <span>
                Rewards cannot be redeemed for alcoholic beverages or
                multi-serve items. You pay the difference for any beverage
                customization over $1 and/or merchandise item over $20. Not all
                stores honor tiered Rewards. Select stores redeem 200 Stars for
                free food or drink items only.
              </span>
            </main>
          </aside>
          <aside className="flex flex-col gap-3 text-[16px]">
            <h1 className="text-gray-600/90 font-bold">BENEFITS</h1>
            <span>
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </span>
          </aside>
        </main>
      </article>
    </main>
  );
};

export default Reward;
