"use client";
import React from "react";
import Data from "@/Data/PlanForMerchant/planForMerchant.json";
import AOS from "aos";
import "aos/dist/aos.css";
const Manage = () => {
  const item = Data["manage-payments"];
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div
      className="flex flex-col-reverse gap-x-4 md:flex-row mt-8 md:mt-16 px-2 md:px-8 lg:px-16 py-6 gap-y-6"
      data-aos="fade-up"
    >
      <div className="sm:w-full md:w-2/5 xl:w-1/3 mt-4 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className=" mx-auto md:max-w-7xl px-2 md:px-0 lg:px-2 ">
              <div className="sm:text-center md:text-left lg:text-left space-y-8 md:space-y-4 lg:space-y-8">
                <h1 className="font-semibold md:font-extrabold text-3xl md:text-2xl lg:text-4xl xl:text-4xl tracking-tight text-slate-800">
                  {/* Manage your payments and transactions */}
                  {item.heading}
                </h1>
                {item.content.map((content, idx) => (
                  <div key={idx}>
                    <h1 className="font-semibold text-lg text-slate-800">
                      {/* Boost your cash */}
                      {content.title}
                    </h1>
                    <p className="sm:mt-1 md:mt-0 lg:mt-1 text-gray-700 sm:max-w-xl sm:mx-auto text-lg md:text-base lg:text-lg lg:mx-0">
                      {/* Your cash receipts are transferred directly to your bank
                    account on D + 1 working day */}
                      {content.content}
                    </p>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="sm:w-full md:w-3/5 xl:w-2/3 mt-4 md:mt-0 px-2">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2 h-40 md:min-h-60 lg:h-60 aspect-auto bg-cover bg-[url('/Assets/plans-for-merchants/manage.jpg')] rounded-2xl"></div>
          <div className="h-40 md:min-h-60 lg:h-60  aspect-auto bg-cover rounded-2xl bg-[url('/Assets/Home/VideoSlide/videoSlide(3).jpg')]"></div>
          <div className="bg-cover h-40 md:min-h-60 lg:h-60 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] rounded-2xl"></div>
          <div className="col-span-2 bg-cover h-40 md:min-h-60 lg:h-60 bg-[url('/Assets/plans-for-merchants/header.jpg')] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
