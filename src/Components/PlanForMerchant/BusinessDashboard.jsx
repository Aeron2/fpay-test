"use client";

import { InboxIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import Data from "@/Data/PlanForMerchant/planForMerchant.json";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const BusinessDashboard = () => {
  const item = Data["business-dashboard"];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div
      className="relative pt-16 pb-32 overflow-hidden bg-gradient-to-b from-pred via-slate-500 to-pblue"
      data-aos="fade-up"
    >
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-r from-purple-600 to-indigo-600"
      /> */}
      <div className="relative ">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 min-h-[35rem]">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ">
            <div>
              <div>
                <span className="h-12 w-12 rounded-full flex items-center justify-center bg-white ">
                  <InboxIcon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  {/* Business dashboard and analytics */}
                  {item.heading}
                </h2>
                <p className="mt-4 text-lg text-slate-200">
                  {/* Our solution comes along with a dashboard and analytics to
                  help you view and regulate your sales and have a better
                  forecast of your future costs and needs. */}
                  {item.content}
                </p>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="inline-flex bg-slate-800 bg-origin-border px-8 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white hover:bg-slate-700 "
                  >
                    {item["get-started"]}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full hover:scale-[1.005] shadow-2xl">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={item["img-link"]}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
