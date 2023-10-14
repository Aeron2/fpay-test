import Heading from "@/Components/heading/Heading";
import Image from "next/image";
import React from "react";
import Data from "@/Data/Home/Home.json";
import AOS from "aos";
import "aos/dist/aos.css";
const SimpleFastSecure = () => {
  AOS.init();
const item = Data.simple_fast_secure;
  return (
    <>
      <div className="text-center mt-20">
        <Heading
          main={item.main}
          redMain={item.redMain}
          subheading={item.subheading}
          tagline={item.tagline}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-8 md:mt-16 px-2 md:px-16 justify-center items-center gap-x-12">
        <div className="sm:w-full md:w-2/5 xl:w-2/5 mt-4 md:mt-0">
          <div className="max-w-7xl mx-auto">
            <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className=" mx-auto md:max-w-7xl px-6 md:px-0 lg:px-2 ">
                <div className="sm:text-center md:text-left lg:text-left space-y-8 md:space-y-4 lg:space-y-8">
                  <div className="divide-y divide-slate-400 space-y-2">
                    {Data.list_data.map((content, index) => (
                      <div className="py-4" key={content.id}>
                        <h1 className="font-semibold text-base md:text-lg lg:text-2xl text-slate-800">
                          {/* {content.main} */}
                          {content.main}
                        </h1>
                        <p className="sm:mt-1 md:mt-0 lg:mt-1 text-gray-700 sm:max-w-xl sm:mx-auto sm:text-lg md:text-base lg:text-lg lg:mx-0">
                          {/* {content.description} */}
                          {content.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 xl:w-2/5 mt-4 md:mt-0 px-4 aspect-square">
          <Image
            src={item.image}
            layout="responsive"
            height={100}
            width={100}
            objectFit="contain"
            alt="simpleFastSecure"
          />
        </div>
      </div>
    </>
  );
};

export default SimpleFastSecure;
