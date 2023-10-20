"use client";
import Heading from "../heading/Heading";
import React,{useEffect} from "react";
import Data from "@/Data/PlanForMerchant/planForMerchant.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  const item = Data["offers"];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div
      className="sm:mt-8 md:mt-0 lg:mt-8 py-8 md:py-0 lg:py-8 px-8 md:px-12 "
      data-aos="fade-up"
    >
      <Heading
        main={item.heading.main}
        tagline={item.heading.tagline}
        subheading={item.heading.subheading}
      />
      <div className="mt-8 md:mt-12 flex-row md:flex md:justify-center gap-x-10">
        <div className="w-full md:w-1/2 text-center space-y-4 md:space-y-8 mx-auto">
          <h1 className="font-semibold text-xl md:text-2xl text-slate-800">
            {/* Merchants - Direct sales */}
            {/* {t(`comparisons.0.title`)} */}
            {item["comparisons"][0].title}
          </h1>{" "}
          <p className="text-base font-semibold text-indigo-500">
            {/* Mobile payment acceptance / credit card : 1.60% * */}
            {/* {t(`comparisons.0.mobile`)} */}
            {item["comparisons"][0].mobile}
          </p>
          <p className="text-base font-medium text-gray-700">
            {/* ✔ Unlimited and free access to the reporting functions <br />{" "}
            <span>of the Lyf Back Office.</span> */}
            {/* {t(`comparisons.0.tick-1`)} */}
            {item["comparisons"][0]["tick-1"]}
          </p>
          <p className="text-base font-medium text-gray-700">
            {/* ✔ Unlimited and free access to the functions <br />
            Commercial animation of the Lyf Back Office. */}
            {/* {t(`comparisons.0.tick-2`)} */}
            {item["comparisons"][0]["tick-2"]}
          </p>
        </div>
        <div className="w-0.5 bg-slate-800 h-auto"></div>
        <div className="mt-8 md:mt-0 w-full md:w-1/2 text-center space-y-4 md:space-y-8 mx-auto">
          <h1 className="font-semibold text-xl md:text-2xl text-slate-800">
            {/* Liberal professions */}
            {/* {t(`comparisons.1.title`)} */}
            {item["comparisons"][1].title}
          </h1>{" "}
          <p className="text-base font-semibold  text-indigo-500">
            {/* Mobile payment acceptance / credit card : 1% * */}
            {item["comparisons"][1].mobile}
          </p>
          <p className="text-base font-medium text-gray-700">
            {/* ✔ Unlimited and free access to the reporting functions <br />
            of the Lyf Back Office */}
            {/* {t(`comparisons.1.tick-1`)} */}
            {item["comparisons"][1]["tick-1"]}
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-base">
          {/* All the prices mentioned are exclusive of VAT. <br />
          VAT applicable at 20%. */}
          {/* {t(`mention`)} */}
          {item.mention}
        </p>
      </div>
    </div>
  );
};

export default Offer;
