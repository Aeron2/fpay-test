import React from "react";
import { Tab } from "@headlessui/react";
import Heading from "../heading/Heading";
import Image from "next/image";
// import { partners } from "../../contents/partners";
import Data from "@/Data/Home/home.json";
import AOS from "aos";
import "aos/dist/aos.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Partners = () => {
  const item = Data.partners;
  const partners = item.img;

  return (
    <div className="flex justify-center" data-aos="fade-up">
      <div className="w-full md:max-w-7xl  md:px-8 py-16 sm:px-0">
        <div className="flex justify-center">
          <Heading
            main={item.heading.main}
            redMain={item.heading.redMain}
            tagline={item.heading.tagline}
            subheading={item.heading.subheading}
          />
        </div>
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-4 rounded-xl bg-white px-4 ">
            {Object.keys(partners).map((partner, index) => (
              <Tab
                key={partner}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-3xl py-2 md:py-2.5 text-xs md:text-base font-medium md:font-bold px-1",
                    "ring-white ring-opacity-60 hover:bg-slate-200 ring-offset-blue-400 focus:outline-none transition duration-200",
                    selected
                      ? "bg-slate-900 shadow text-slate-100 hover:bg-slate-900"
                      : "text-slate-800  border hover:ring-offset-slate-400"
                  )
                }
              >
                {/* {partner} */}
                {/* {`partners.partner-types.${index}.name`} */}
                {item["partner-types"][index]["name"]}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.values(partners).map((partner, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none px-2 md:px-8"
                )}
              >
                <div className="flex justify-center">
                  <div className="grid grid-cols-4  ">
                    {partner.map((item) => (
                      <div
                        key={item.id}
                        className="
                  w-[90px]
                  md:w-[200px]
                  h-[90px]
                  md:h-[200px]
                  flex
                  items-center
                  justify-center
                  bg-white
                  rounded-full
                  mb-8
                  px-2
                  md:px-8
                  "
                      >
                        <Image
                          alt="partners images"
                          src={item.image}
                          height={300}
                          width={300}
                          objectFit="contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Partners;
