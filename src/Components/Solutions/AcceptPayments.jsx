import Image from "next/image";
import React from "react";

import Data from "@/Data/Solutions/solutions.json";
import Heading from "../heading/Heading";
const AcceptPayments = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-gradient-to-b from-slate-100 via-transparent to-slate-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 gap-x-16 lg:grid-cols-2 ">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
              {/* Our Complete Suite of Products */}
              {Data.title}
            </h2>
            <p className="mt-4 text-gray-700">
              {/* We provide a wide variety of services and products to our
              customers */}
              {Data["header-section"].content}
            </p>
          </div>
          <Heading title={Data.title} />
        </div>

        <div className="my-6 pb-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-3xl overflow-hidden m:aspect-h-1 sm:aspect-w-1 sm:row-span-2 border border-slate-300 py-4 bg-white">
            <div className="flex justify-start text-center space-x-2 items-center px-4">
              <Image
                src="/images/logo/logo-only.png"
                objectFit="contain"
                height={80}
                width={100}
                alt="fPay logo-only"
              />
              <h1 className="font-bold text-xl md:text-2xl text-slate-800 text-left">
                {/* Accept Payments */}
                {`cards.accept-payments.title`}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 md:p-4 lg:p-8">
              <div>
                <ul className="space-y-4 font-medium text-sm md:text-medium lg:text-base text-slate-800">
                  {Data.cards["accept-payments"]["type-1"].map(
                    (item, index) => (
                      <div key={index}>{item}</div>
                    )
                  )}
                  {/* <li className="font-bold">
                    {(`cards.accept-payments.type-1.0`)}
                  </li>
                  <li>{(`cards.accept-payments.type-1.1`)}</li>
                  <li>{(`cards.accept-payments.type-1.2`)}</li>
                  <li>{(`cards.accept-payments.type-1.3`)}</li>
                  <li>{(`cards.accept-payments.type-1.4`)}</li> */}
                </ul>
              </div>

              <div>
                <ul className="space-y-4 font-medium text-sm md:text-medium lg:text-base text-slate-800">
                  <li className="font-bold">
                    {`cards.accept-payments.type-2.0`}
                  </li>
                  <li>{`cards.accept-payments.type-2.1`}</li>
                  <li>{`cards.accept-payments.type-2.2`}</li>
                  <li>{`cards.accept-payments.type-2.3`}</li>
                  <li>{`cards.accept-payments.type-2.4`}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group aspect-w-2 aspect-h-1 rounded-3xl overflow-hidden sm:relative sm:aspect-none sm:h-full border border-slate-300 py-4 bg-white">
            <div className="flex justify-start text-center space-x-2 items-center px-4">
              <Image
                src="/images/logo/logo-only.png"
                objectFit="contain"
                height={80}
                width={100}
                alt="fPay-logo"
              />
              <h1 className="font-bold text-xl md:text-2xl text-slate-800 text-left">
                {`cards.manage-business.title`}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 md:p-4 lg:p-8 ">
              <div>
                <ul className="space-y-4 font-medium text-sm md:text-medium lg:text-base text-slate-800">
                  <li>{`cards.manage-business.type-1.0`}</li>
                  <li>{`cards.manage-business.type-1.1`}</li>
                  <li>{`cards.manage-business.type-1.2`}</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 font-medium text-sm md:text-medium lg:text-base text-slate-800">
                  <li>{`cards.manage-business.type-2.0`}</li>
                  <li>{`cards.manage-business.type-2.1`}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group aspect-w-2 aspect-h-1 rounded-3xl overflow-hidden sm:relative sm:aspect-none sm:h-full border border-slate-300 py-4 bg-white">
            <div className="flex justify-start text-center space-x-2 items-center px-4">
              <Image
                src="/images/logo/logo-only.png"
                objectFit="contain"
                height={80}
                width={100}
                alt="fpay-logo"
              />
              <h1 className="font-bold text-xl md:text-2xl text-slate-800 text-left">
                {`cards.personal-use.title`}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 md:p-4 lg:p-8 ">
              <div>
                <ul className="space-y-4 font-medium text-sm md:text-medium lg:text-base text-slate-800">
                  <li>{`cards.personal-use.type-1.0`}</li>
                  <li>{`cards.personal-use.type-1.1`}</li>
                  <li>{`cards.personal-use.type-1.2`}</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 font-medium text-sm md:text-medium lg:text-base text-slate-800">
                  <li>{`cards.personal-use.type-2.0`}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptPayments;
