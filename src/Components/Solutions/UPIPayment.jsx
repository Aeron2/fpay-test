"use client";
import React from "react";
import {
  CurrencyEuroIcon,
  DocumentTextIcon,
  QrcodeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import Data from "@/Data/Solutions/solutions.json";
import Heading from "../heading/Heading";
import Image from "next/image";
import { useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UPIPayment = () => {
  const item = Data["UPI-payment"];

  return (
    <div className="
   bg-gradient-to-t from-transparent vvia-indigo-300/50 
   to-transparent
    ">
      <Heading main={item.main} redMain={item.redMain} />
      {/* Split brand panel */}
      <div className="relative">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-1/2 " />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
          <div className=" py-0 px-6 sm:py-4 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {/* {item.title} */}
              </p>
              <dl className="mt-12 space-y-10">
                {item.features.map((feature, i) => (
                  <div key={feature.main} className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-tr from-indigo-900 via-indigo-500 to-indigo-900 rounded-md flex items-center justify-center">
                        {/* {loadedIcons && <loadedIcons.default
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />} */}
                        <Image
                          src={feature.icon}
                          layout="fill"
                          objectFit="contain"
                          alt="simpleFastSecure" className="text-white scale-50" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.main}
                        {/* {t(`UPI-payment.features.${i}.main`)} */}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                      {/* {t(`UPI-payment.features.${i}.description`)} */}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
            <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0 aspect-square">
              <Image
                src="/Assets/highlight/transfer.png"
                layout="responsive"
                height={100}
                width={100}
                objectFit="contain"
                alt="simpleFastSecure"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPIPayment;
