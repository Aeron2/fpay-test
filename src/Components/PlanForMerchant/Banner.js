'use client';
import Link from "next/link";
import React from "react";
import styles from "@/styles/highlight.module.css";
import Data from "@/Data/PlanForMerchant/planForMerchant.json";
// import photo from "/Assets/plans-for-merchants/banner1.jpeg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header
      data-aos="zoom-in-up"
      id="master-header"
      className={`max-h-screen lg:max-h-[80%] text-white flex flex-col justify-center relative ${styles.headerStyles}`}
    >
      <div
        className={`z-0 brightness-50 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat ]`}
        style={{ backgroundImage: `url(${Data["head-photo"]})` }}
      ></div>
      {/* <img src={Data["head-photo"]} alt="banner" className="z-0" /> */}
      {/* <div
        className={`z-0 brightness-50 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat `}
      >
        <Image src ={photo} alt="banner" layout="fill" objectFit="cover" />
      </div> */}
      <div className="z-10 relative py-12 mx-auto md:w-full sm:w-1/2 xl:w-1/2 text-center px-0 md:px-12 lg:px-0">
        <h1 className="leading-tight mb-2 text-3xl md:text-5xl text-center font-base">
          {/* Just cash in. */}
          {Data["header"]}
        </h1>
        <span className="font-light text-3xl md:text-5xl mb-8">
          {/* Every. where all the time. */}
          {Data["subheader"]}
        </span>

        <div className="flex justify-center">
          <Link href="/contact-us">
            {/* <button
              type="button"
              className="flex mt-6 bg-[#FE6B70] text-white shadow hover:shadow-lg py-2 px-4 text-lg md:text-xl font-semibold rounded-full"
            >
              Make an appointment here
              <ArrowRightIcon className="my-1 ml-2 h-6 w-6" />
            </button> */}
            <div
              className="w-full md:max-w-xs md:w-auto mt-8 mb-4 py-4 px-8 text-sm font-bold uppercase backdrop-blur-md bg-white/30 rounded-xl hover:bg-slate-500/30 border border-slate-400/50 hover:border-slate-500/50 text-gray-100 hover:backdrop-blur-lg hover:text-gray-100 transition duration-200 flex justify-evenly items-center"
              href="#"
            >
              {/* Make an appointment here */}
              {Data["head-button"]}
              {/* <span>
                <ArrowRightIcon className=" h-6 w-6 text-gray-100" />
              </span> */}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Banner;
