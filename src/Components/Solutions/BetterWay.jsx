import {
  AnnotationIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import HeadingUpgrade from "../heading/HeadingUpgrade";
import Image from "next/image";
import React from "react";
import Data from "@/Data/Solutions/solutions.json";
const featuresList = [
  {
    name: "Competitive exchange rates",
    bankImage: "/Assets/logo/logo-only.png",
    screenshot: "/Assets/solutions/banksUPI.png",
    description: "Lorem.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    bankImage: "/Assets/logo/logo-only.png",
    screenshot: "/Assets/solutions/banksUPI.png",
    // screenshot: "/Assets/banksUPI.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
    bankLink: "#",
  },
  {
    name: "Transfers are instant",
    bankImage: "/Assets/logo/logo-only.png",
    screenshot: "/Assets/solutions/banksUPI.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
    bankLink: "#",
  },
  {
    name: "Mobile notifications",
    bankImage: "/Assets/logo/logo-only.png",
    screenshot: "/Assets/solutions/banksUPI.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
    bankLink: "#",
  },
  {
    name: "Transfers are instant",
    bankImage: "/Assets/logo/logo-only.png",
    screenshot: "/Assets/solutions/banksUPI.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
    bankLink: "#",
  },
  {
    name: "Mobile notifications",
    bankImage: "/Assets/logo/logo-only.png",
    screenshot: "/Assets/solutions/banksUPI.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
    bankLink: "#",
  },
];

const BetterWay = () => {
  return (
    <div className="py-12 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <HeadingUpgrade
          main={Data["better-way"]["feature-list"].main}
          tagLine={Data["better-way"]["feature-list"].tagline}
          subHeading={Data["better-way"]["feature-list"].subHeading}
        />

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature, index) => (
              <div className="w-full p-3 lg:w-full h-full" key={feature.name}>
                <div className="flex flex-col h-auto overflow-hidden shadow-xl lg:flex-row-reverse rounded-3xl lg:h-42">
                  <div className="flex items-center justify-center w-1/2 overflow-hidden">
                    <Image
                      src={feature.screenshot}
                      className="object-contain overflow-hidden aspect-square scale-75"
                      height={500}
                      width={500}
                      alt={feature.name}

                    />
                  </div>
                  <div className="flex flex-col justify-between w-1/2 p-6 leading-normal bg-white rounded-b lg:rounded-b-none lg:rounded-r">
                    <div className="rounded-full">
                      <Image
                        src={feature.bankImage}
                        objectFit="contain"
                        height={70}
                        width={70}
                        alt={feature.name}
                      />
                    </div>
                    <div className="mb-2 text-xl font-bold leading-tight text-slate-800">
                      {feature.name}
                      {/* {t(`feature-list.${index}.name`)} */}
                    </div>
                    <p className="text-base min-h-[6rem] text-gray-500">
                      {feature.description}
                      {/* {t(`feature-list.${index}.description`)} */}
                    </p>
                    <div className="flex mt-4 text-indigo-500 cursor-pointer hover:text-indigo-600">
                      <a
                        href={feature.bankLink}
                        className="text-base font-medium cursor-pointer"
                      >
                        Read More
                      </a>
                      <ArrowRightIcon className="w-5 h-5 mt-1 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default BetterWay;
