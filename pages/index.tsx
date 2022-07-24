import type { NextPage } from "next";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-500 overflow-hidden">
      <div
        style={{ height: "97%", width: "100%" }}
        className="flex flex-col md:flex-row w-full"
      >
        <div className="main-img w-full md:w-1/2 self-center"></div>
        <div className="self-center flex flex-col items-center justify-center w-full md:w-1/2 h-4/5">
          <div className="text-center mb-20 text-white text-xl lg:text-3xl font-semibold">
            <h1>MERLIND CONSTANZE POHL</h1>
            <h1 className="tracking-widest my-5">— mezzosoprano —</h1>
            <h1>.THEATRE. OPERA. PERFORMANCE.</h1>
          </div>
          <div className="flex flex-col gap-6 text-gray-800 font-semibold text-center lg:text-lg">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <BsTelephone />
              <h1>+4915756355868</h1>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-4">
              <AiOutlineMail />
              <h1>merlind.pohl@web.de</h1>
            </div>

            {/* YT */}
            <a
              className="flex items-center gap-4 cursor-pointer"
              href="https://www.youtube.com/channel/UCyU5BuXDUDz9-vJKbdqN61w"
              target="_blank"
            >
              <div className="text-xl">
                <AiOutlineYoutube />
              </div>
              <h1>Merlind Pohl</h1>
            </a>

            {/* Insta */}
            <a
              className="flex items-center gap-4 cursor-pointer"
              href="https://www.instagram.com/merlindconstanze"
              target="_blank"
            >
              <div className="text-xl">
                <AiOutlineInstagram />
              </div>
              <h1>merlindconstanze</h1>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ height: "3%" }}
        className="w-full flex items-center justify-between text-white text-xs px-2"
      >
        <div className="w-1/2 whitespace-nowrap">
          <h1>photo by Vivien Woßeng and Enno Schramm</h1>
        </div>
        <div className="w-1/2 text-right md:text-center">
          <h1>©2022 Merlind Constanze Pohl</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
