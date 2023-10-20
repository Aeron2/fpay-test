"use client";
import Heading from "../heading/Heading";
import { Tab } from "@headlessui/react";
import Data from "@/Data/PlanForMerchant/planForMerchant.json";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const PricingDetails = {
  PaymentInstrument: [
    {
      title: "Payment Instrument",
      first: "UPI - Standard",
      second: "UPI - Subscription",
      third: "FPay Wallet",
      fourth: "Credit Card",
      fifth: "Debit Card",
      sixth: "Netbanking",
    },
  ],

  SmallMediumBusiness: [
    {
      title: "Small Medium Business",
      first: "0%",
      second: "₹5- 65 per mandate for annual subscription plan",
      third: "1.99%",
      fourth: "1.99%",
      fifth: "0%",
      sixth: "1.99%",
    },
  ],
};

const YearlyBiling = {
  PaymentInstrument: [
    {
      title: "FPay Wallet",
      first: "UPI - Payment",
      second: "UPI - Subscription",
      third: "Debit Card",
    },
  ],

  SmallMediumBusiness: [
    {
      title: "Merchant Discount Rate",
      first: "0%",
      second: "0%",
      third: "0%",
    },
  ],
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabItems = [
  {
    id: 1,
    name: "Online Payment",
  },
  {
    id: 2,
    name: "Instore Payment",
  },
];
const Pricing = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  const item = Data.pricing;
  return (
    <div className="pb-10">
      <div
        className="max-w-full md:max-w-7xl mx-0 md:mx-auto py-8 px-0 sm:px-0 lg:px-8"
        data-aos="fade-up"
      >
        <Tab.Group>
          <div className=" sm:flex sm:flex-col sm:align-center">
            <Heading
              main={item.main}
              redMain={item.redMain}
              tagline={item.tagline}
              subheading={item.subheading}
            />
            <Tab.List className="relative self-center mt-6  rounded-lg p-0.5 flex sm:mt-8 w-full space-x-4 px-4 md:px-40">
              {TabItems.map((tab, i) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-t-lg outline-none py-2.5 text-sm md:text-xl font-bold leading-5 border drop-shadow-lg ",
                      "focus:outline-none  drop-shadow-lg ",
                      selected
                        ? "bg-indigo-400 text-white"
                        : "text-slate-800 bg-white"
                    )
                  }
                >
                  {/* {tab.name} */}
                  {/* {(`item.tab-items[i].name`)} */}
                  {item["tab-items"][i].name}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <div className=" grid grid-cols-2 sm:grid sm:grid-cols-2lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3 divide-x divide-slate-400 md:divide-x-0">
                {Object.values(PricingDetails).map((posts, idx) => (
                  <div key={"Pricing-details-" + idx}>
                    {posts.map((post, i) => (
                      <div
                        key={post.first}
                        className="border-0 md:border-l border-slate-200 rounded-3xl md:shadow-xl  md:bg-white"
                      >
                        <div className="p-6">
                          <h2 className="border-b border-slate-400 flex justify-center h-14  text-base md:text-2xl leading-6 font-semibold text-gray-900 ">
                            {/* {post.title} */}
                            {item["pricing-details"][idx].title}
                          </h2>

                          <p className="flex justify-center h-4 mt-8">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.first} */}
                              {item["pricing-details"][idx].first}
                            </span>{" "}
                          </p>
                          <p className="flex justify-center h-14 mt-8 text-center">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.second} */}
                              {item["pricing-details"][idx].second}
                            </span>
                          </p>
                          <p className="flex justify-center mt-8">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.third} */}
                              {item["pricing-details"][idx].third}
                            </span>
                          </p>
                          <p className="flex justify-center mt-8">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.fourth} */}
                              {item["pricing-details"][idx].fourth}
                            </span>
                          </p>
                          <p className="flex justify-center mt-8">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.fifth} */}
                              {item["pricing-details"][idx].fifth}
                            </span>
                          </p>
                          <p className="flex justify-center mt-8">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.sixth} */}
                              {item["pricing-details"][idx].sixth}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="hidden lg:block lg:justify-center border border-gray-200 rounded-3xl shadow-sm md:shadow-xl md:bg-white">
                  <div className="p-6">
                    <h2 className="h-14 border-b border-slate-400 flex justify-center text-2xl leading-6 font-semibold text-gray-900">
                      {item.enterprise}
                    </h2>
                    <div className="flex flex-col items-center">
                      <p className="mt-8">
                        <span className="text-base text-gray-900">
                          {/* We understand scale. Get in touch for a custom pricing
                          plan designed for your business requirement. */}
                          {item.content}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3 divide-x divide-slate-400 md:divide-x-0">
                {Object.values(YearlyBiling).map((posts, idx) => (
                  <div key={"yearly-billing-" + idx}>
                    {posts.map((post) => (
                      <div
                        key={post.first}
                        className="border-0 md:border border-gray-200 rounded-3xl md:shadow-sm divide-y md:bg-white "
                      >
                        <div className="p-6">
                          <h2 className="border-b border-slate-400 flex  h-14 text-base md:text-2xl leading-6 font-semibold text-gray-900">
                            {/* {post.title} */}
                            {/* {`item.yearly-billing.${idx}.title`} */}
                            {item["yearly-billing"][idx].title}
                          </h2>

                          <p className="h-4 mt-8 flex justify-center">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.first} */}
                              {/* {`item.yearly-billing.${idx}.first`} */}
                              {item["yearly-billing"][idx].first}
                            </span>
                          </p>
                          <p className="h-14 mt-8 flex justify-center text-center">
                            <span className="text-base font-base text-gray-900 ">
                              {/* {post.second} */}
                              {/* {`item.yearly-billing.${idx}.second`} */}
                              {item["yearly-billing"][idx].second}
                            </span>
                          </p>
                          <p className="mt-8 flex justify-center">
                            <span className="text-base font-base text-gray-900">
                              {/* {post.third} */}
                              {/* {`item.yearly-billing.${idx}.third`} */}
                              {item["yearly-billing"][idx].third}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="hidden md:block border border-gray-200 rounded-3xl shadow-sm divide-y divide-gray-200 md:bg-white">
                  <div className="p-6">
                    <h2 className="h-14 border-b border-slate-400 flex justify-center text-2xl leading-6 font-semibold text-gray-900">
                      {item.enterprise}
                    </h2>

                    <p className="flex justify-center mt-8">
                      <span className="text-base text-gray-900">
                        {/* We understand scale. Get in touch for a custom item
                        plan designed for your business requirement. */}
                        {item.content}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Pricing;
