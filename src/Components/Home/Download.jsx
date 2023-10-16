import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Data from "@/Data/Home/Home.json";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Download = () => {
  // AOS.init();
  const item = Data.download;
  return (
    <div
      className="relative md:flex justify-center items-center bg-white overflow-hidden py-8 mt-32 max-w-7xl mx-auto"
      // data-aos="fade-up"
    >
      <div className="">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-2 mx-auto max-w-7xl px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div>
              <Image
                width={100}
                height={100}
                objectFit="contain"
                src="/Assets/logo/logo-only.png"
                alt="FPay logo"
              />
            </div>
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold sm:text-5xl md:text-5xl text-slate-800">
                <span className="block xl:inline">
                  {item.title_blue}
                  <span className="text-red-500">{item.title_red}</span>
                </span>{" "}
                <br />
              </h1>
              <p className=" sm:mt-5 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                {item.content}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-800 hover:bg-slate-600 md:py-4 md:text-lg md:px-10 space-x-2"
                  >
                    {Data.download_app}
                    <FontAwesomeIcon icon={faApple} className="h-6 w-6 ml-2" />
                    <FontAwesomeIcon icon={faGooglePlay} className="h-5 w-5" />
                  </a>{" "}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:w-1/4 aspect-square object-contain">
        <Image
          src="/Assets/wallet.png"
          layout="responsive"
          height={100}
          width={100}
          objectFit="contain"
          alt="fpay-wallet"
        />
      </div>
    </div>
  );
};

export default Download;
