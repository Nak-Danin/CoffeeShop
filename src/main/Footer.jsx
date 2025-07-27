import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownLink, GridFooter } from "../components";
import { topic } from "../data/footer";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
const Footer = () => {
  return (
    <div className="w-full border-y-[2px] border-gray-300 p-[40px]">
      <main className="lg:grid grid-cols-5 gap-2 hidden pb-[35px]">
        {topic.map(
          ({ id, main, link1, link2, link3, link4, link5, link6, link7 }) => (
            <GridFooter
              key={id}
              title={main}
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
              link7={link7}
            />
          )
        )}
      </main>
      <main className="flex lg:hidden flex-col gap-[30px] pb-[35px]">
        {topic.map(
          ({ id, main, link1, link2, link3, link4, link5, link6, link7 }) => (
            <DropdownLink
              key={id}
              title={main}
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
              link7={link7}
            />
          )
        )}
      </main>
      <main className="flex flex-col border-t-[2px] border-gray-400/50 gap-[20px] py-[35px]">
        <div className="flex gap-[10px] text-[30px]">
          <FontAwesomeIcon
            className="rounded-full p-[6px] hover:cursor-pointer hover:bg-gray-400/40"
            icon={faSpotify}
          />
          <FontAwesomeIcon
            className="rounded-full p-[6px] hover:cursor-pointer hover:bg-gray-400/40"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="rounded-full p-[6px] hover:cursor-pointer hover:bg-gray-400/40"
            icon={faPinterest}
          />
          <FontAwesomeIcon
            className="rounded-full p-[6px] hover:cursor-pointer hover:bg-gray-400/40"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="rounded-full p-[6px] hover:cursor-pointer hover:bg-gray-400/40"
            icon={faYoutube}
          />
          <FontAwesomeIcon
            className="rounded-full p-[6px] hover:cursor-pointer hover:bg-gray-400/40"
            icon={faXTwitter}
          />
        </div>
        <ul className="flex flex-col gap-[15px] text-[18px] font-medium font-[Roboto_Condensed]">
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            Privacy Notice
          </li>
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            Consumer Health Privacy Notice
          </li>
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            Terms of Use
          </li>
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            Do Not Share My Persional Information
          </li>
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            CA Supply Chain Act
          </li>
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            Accessibility
          </li>
          <li className="hover:underline hover:cursor-pointer underline-offset-2">
            Cookie Preferences
          </li>
        </ul>
        <span className="text-gray-400">
          © 2025 Starbucks Coffee Company. All rights reserved.
        </span>
      </main>
    </div>
  );
};

export default Footer;
