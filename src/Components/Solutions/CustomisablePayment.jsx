import React from "react";
import Heading from "../heading/Heading";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Data from "@/Data/Solutions/solutions.json";
const incentives = [
  {
    name: "Easy Refunds",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "Quick Settlements",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Large Payment Collections",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
  {
    name: "Payment links",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

const CustomisablePayment = () => {
const item = Data.CustomPayment;
  return (
    <div className="max-w-7xl mx-auto sm:px-2 sm:py-32 lg:px-4">
      <div className="px-4">
        <Heading
          main={item["custom-payments"].main}
          tagLine={item["custom-payments"].tagline}
          redMain={item["custom-payments"].redMain}
          subHeading={item["custom-payments"].subHeading}
        />
      </div>
      <div className="max-w-2xl mx-auto px-6 lg:max-w-none">
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          {item.incentives.map((incentive, i) => (
            <div key={incentive.name} className="sm:flex h-full lg:block my-4">
              <div className="sm:flex-shrink-0 w-20 h-20 rounded-full p-4 bg-indigo-200/20 aspect-square">
                <Image
                  src={incentive.imageSrc}
                  alt={incentive.name}
                  height={100}
                  width={100}
                  objectFit="contain"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 className="text-lg font-bold text-gray-900">
                  {incentive.name}
                  {/* {t(`incentives.${i}.name`)} */}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {incentive.description}
                  {/* {t(`incentives.${i}.description`)} */}
                </p>
              </div>
              <div className="mt-4 text-indigo-500 cursor-pointer hover:text-indigo-600 flex">
                <a href="#" className="text-base font-medium cursor-pointer">
                  Learn more
                  {/* {t(`learn-more`)} */}
                </a>
                <ArrowRightIcon className="ml-2 mt-1 h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomisablePayment;
