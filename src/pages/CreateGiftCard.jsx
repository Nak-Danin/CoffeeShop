import { Link, useParams } from "react-router-dom";
import { cards } from "../data/giftcards";
import { InputForm } from "../components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
const CreateGiftCard = () => {
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const getTotal = (val) => {
    setTotal(val);
  };
  const handleOnChange = (e) => {
    const text = e.target.value;
    if (message.length >= 160) {
      setMessage(text.slice(0, 160));
    } else {
      setMessage(text);
    }
  };
  useEffect(() => {
    setCount(message.length);
  }, [message]);
  console.log("WordCount: ", count);
  const { title, id } = useParams();
  const originTitle = title.toUpperCase();
  let found = false;
  let display = null;
  for (const card of cards) {
    if (card.title == originTitle) {
      found = card.items.some((c) => c.id == id);
    }
    if (found) {
      display = card.items.find((i) => i.id == id);
      break;
    }
  }
  return (
    <form className="w-full h-full flex flex-col items-center pt-[50px] relative">
      <main className="flex flex-col gap-5 w-[350px] md:w-[500px]">
        <span className="w-full font-semibold text-gray-600">
          <Link className=" text-gray-700/70" to={"giftcards"}>
            Gift
          </Link>
          &nbsp;/ Create eGift
        </span>
        <h1 className="font-bold text-[25px] md:text-[30px]">Create eGift</h1>
        <img
          className="w-full rounded-xl"
          src={display?.imgsrc}
          alt={display?.id}
        />
        <span>
          <span className="text-green-800">*</span> indicate required field
        </span>
        <h1 className="py-3 font-semibold text-[20px] md:text-[25px] border-b-4 border-[#D4E9E2]">
          Gift amount
        </h1>
        <InputForm
          type={"number"}
          placeHolder={"* Select gift amount ($)"}
          require={true}
          getTotal={getTotal}
        />
        <h1 className="pt-5 pb-3 font-semibold text-[20px] md:text-[25px] border-b-4 border-[#D4E9E2]">
          Who are you gifting to?
        </h1>
        <InputForm
          type={"text"}
          placeHolder={"* Recipient Name"}
          require={true}
        />
        <InputForm
          type={"email"}
          placeHolder={"* Recipient Email"}
          require={true}
        />
        <h1 className="pt-5 pb-3 font-semibold text-[20px] md:text-[25px] border-b-4 border-[#D4E9E2]">
          Personal note
        </h1>
        <div>
          <textarea
            value={message}
            onChange={handleOnChange}
            className="w-full border rounded-md max-h-fit min-h-[120px] px-3 py-2 text-[17px] placeholder:text-black"
            name="note"
            id="note"
            placeholder="Message (optional)"
          ></textarea>
          <span className="flex justify-end">{count} / 160</span>
        </div>
        <h1 className="pt-5 pb-3 font-semibold text-[20px] md:text-[25px] border-b-4 border-[#D4E9E2]">
          From
        </h1>
        <InputForm type={"text"} placeHolder={"* Sender Name"} require={true} />
        <InputForm
          type={"email"}
          placeHolder={"* Sender Email"}
          require={true}
        />
      </main>
      <article className="w-full flex flex-col items-center gap-4 py-[50px] bg-[#EDEBE9] mt-[100px]">
        <span className="text-[17px] text-gray-800/80 text-center w-[90%]">
          ✨&nbsp;By purchasing this eGift, I have read and agree to the
          Starbucks Card Terms & Conditions.
        </span>
        <Link className="w-fit px-3 py-1 rounded-full font-semibold font-sans text-[15px] md:text-[17px] border border-black hover:cursor-pointer">
          Card Terms & Conditions{" "}
          <FontAwesomeIcon
            className="text-[18px] text-gray-600"
            icon={faSquareArrowUpRight}
          />
        </Link>
      </article>
      <button
        type="submit"
        className="fixed bottom-10 right-6 bg-[#00754A] px-5 py-3 text-white rounded-full text-[18px] md:text-[20px] font-semibold z-[100]"
      >
        Checkout <span className="font-mono">${total || "0"}.00</span>
      </button>
    </form>
  );
};

export default CreateGiftCard;
