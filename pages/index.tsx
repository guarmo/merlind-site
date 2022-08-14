import type { NextPage } from "next";
import Head from "next/head";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-500 overflow-hidden pb-2">
      <Head>
        <title>MERLIND CONSTANZE POHL</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <main
        style={{ height: "97%", width: "100%" }}
        className="flex flex-col md:flex-row w-full"
      >
        <div className="main-img w-full md:w-1/2 self-center"></div>
        <div className="self-center flex flex-col items-center justify-center w-full md:w-1/2 h-4/5">
          <div className="text-center mb-20 text-white text-xl xl:text-3xl font-semibold">
            <h1 className="font-montserrat">MERLIND CONSTANZE POHL</h1>
            <h1 className="tracking-widest my-5">— mezzosoprano —</h1>
            <h1 className="font-montserrat">.THEATRE. OPERA. PERFORMANCE.</h1>
          </div>
          <div className="flex flex-col gap-6 text-gray-800 font-semibold text-center lg:text-lg">
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
              <div className="text-xl">
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
              <div className="text-xl">
                <AiOutlineInstagram />
              </div>
              <h1>merlindconstanze</h1>
            </a>
          </div>
        </div>
      </main>
      <footer
        style={{ height: "4%" }}
        className="w-full flex flex-col sm:flex-row items-center justify-between text-white text-xs px-2"
      >
        <div className="w-full md:w-1/2 text-center md:text-left whitespace-nowrap">
          <h1>photo by Vivien Woßeng and Enno Schramm</h1>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right md:w-1/2">
          <h1>©2022 Merlind Constanze Pohl</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;
