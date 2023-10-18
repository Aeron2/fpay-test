import React from "react";
import Data from "@/Data/Home/home.json";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { data } from 'autoprefixer';
// arrow - long - right;
// import {ArrowLongRightIcon} from'@heroicons/react/24/outline'
function Services() {
  // console.log(
  //   Data.services[0].image
  // )
  useEffect(() => {
     AOS.init({
       duration: 1000,
       once: true,
       offset: 50,
     });
   }, []);
  return (
    <div className="container mx-auto mt-32 " data-aos="fade-up">
      <div className="hel text-slate-600 text-4xl font-bold ">
        Our <span className="text-pred italic"> &nbsp;Services</span>
      </div>
      <div className="flex flex-wrap   justify-around gap-y-12 mt-16">
        {Data.services.map((item, index) => (
          <div key={index} data-aos="fade-up">
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

function Cards({ item }) {
  return (
    <div className="hel h-full border-2 border-[#3c3b3b43] w-max px-10 py-8  overflow-hidden hover:border-none hover:shadow-xl rounded-xl relative space-x-12 cursor-pointer ">
      <div className="bg-[#E8FBFE] absolute rounded-full w-[100%] h-[150%]  -z-[1] items-start -right-[50%]" />
      <div className="flex flex-col text-justify">
        <div className="text-pblue font-bold text-2xl">{item.heading}</div>
        <div className="w-48 text-slate-500 mt-4">
          {item.subheading} <br />
          <span className="font-bold">{item.subheading2}</span>
        </div>
        <div className="hover:bg-slate-100 hover:border-slate-200 p-2 rounded-full w-max mt-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-pred  font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[##E8FBFE] rounded-full  ">
        <Image
          src={item.image}
          alt=" "
          loading="lazy"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
