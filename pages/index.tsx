import type { NextPage } from "next";
import Meta from "./meta";

import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-500 overflow-hidden">
      <Meta />
      <main className="flex flex-col md:flex-row w-full h-full">
        <section className="main-img w-full md:w-1/2 self-center relative">
          <h1 className="whitespace-nowrap absolute bottom-0 left-0 text-white pl-2 pb-2 text-xs hidden sm:block">
            photo by Vivien Woßeng and Enno Schramm
          </h1>
        </section>
        <section className="self-center flex flex-col items-center justify-center w-full md:w-1/2 h-4/5">
          <div className="text-center mb-6 md:mb-20 text-white sm:text-xl xl:text-3xl font-semibold">
            <h1 className="font-montserrat">MERLIND CONSTANZE POHL</h1>
            <h1 className="tracking-widest my-2 sm:my-5">— mezzosoprano —</h1>
            <h1 className="font-montserrat">.THEATRE. OPERA. PERFORMANCE.</h1>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 text-gray-800 font-semibold text-center text-sm lg:text-lg">
            {/* Phone */}
            <div className="flex items-center gap-4 font-light">
              <BsTelephone />
              <h1>+4915756355868</h1>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-4 font-light">
              <AiOutlineMail />
              <h1>merlind.pohl@web.de</h1>
            </div>

            {/* YT */}
            <a
              className="flex items-center gap-4 cursor-pointer font-light"
              href="https://www.youtube.com/channel/UCyU5BuXDUDz9-vJKbdqN61w"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sm:text-xl">
                <AiOutlineYoutube />
              </div>
              <h1>Merlind Pohl</h1>
            </a>

            {/* Insta */}
            <a
              className="flex items-center gap-4 cursor-pointer font-light"
              href="https://www.instagram.com/merlindconstanze"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sm:text-xl">
                <AiOutlineInstagram />
              </div>
              <h1>merlindconstanze</h1>
            </a>
          </div>
          <h1 className="w-full md:w-1/2 text-center md:text-right md:w-1/2 text-white text-xs absolute bottom-0 right-0 pb-2 sm:pr-2">
            ©2022 Merlind Constanze Pohl
          </h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
