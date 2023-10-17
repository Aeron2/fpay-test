// import { DottedGrid } from "./dottedGrid";
import Heading from "../heading/Heading";

import React from "react";
import Data from "@/Data/Home/Home.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhyToUse = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000,
       once: true,
       offset: 50,
     });
   }, []);
  const item = Data["why-to-use"];
  const List = item.List;
  return (
    <div data-aos="fade-up">
      <div className="text-center mt-20">
        <Heading
          main={item.heading.main}
          redMain={item.heading.redMain}
          tagline={item.heading.tagline}
          subheading={item.heading.subheading}
        />
      </div>
      <div className="  relative my-10 overflow-hidden px-2 md:px-8 lg:px-32 py-8 md:py-12  mx-0 sm:mx-4 md:mx-12 lg:mx-24 bg-cover bg-no-repeat sm:rounded-[3rem] bg-gradient-to-r from-black via-slate-600 to-slate-800">
        <div className="absolute overflow-hidden bottom-0 -left-10 z-0">
          {/* <DottedGrid className="h-40 w-40 text-gray-100" /> */}
        </div>
        <div className="absolute overflow-hidden -top-5 -right-5 z-0">
          {/* <DottedGrid className="h-40 w-40 text-gray-100" /> */}
        </div>
        <div className="lg:col-span-5">
          <div className="">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0 z-10">
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {List.map((content, index) => (
                  <div
                    className="cursor-pointer bg-slate-900/20 hover:bg-slate-900/30 rounded-[2rem] border border-slate-300/20 backdrop-blur-lg transition duration-150 ease-out hover:ease-in hover:shadow-xl hover:border-slate-300/20 h-64 flex flex-col justify-center items-center"
                    key={content.id}
                  >
                    <div className="text-center py-6 flex justify-center">
                      <content.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="px-8 pb-8">
                      <div className="flex justify-center text-center overflow-hidden">
                        <p className="font-medium text-sm text-white text-ellipsis ">
                          {/* {content.description} */}
                          {(`Data.why-to-use.why-cards-data[${index}].description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyToUse;
