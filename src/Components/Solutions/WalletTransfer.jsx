"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Data from "@/Data/Solutions/solutions.json";
import Heading from "../heading/Heading";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const WalletTransfer = () => {
  const item = Data.benchmark;
  return (
    <div className="max-w-7xl mx-auto px-6 mt-32">
      <div className="lg:text-center w-5xl">
       
        <Heading
          main={item.title}
          redMain={item.redMain}
          subheading={item.content}
        />
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-10 mt-20">
        <Tab.Group>
          <div className="col-span-3 md:col-span-2">
            <Tab.Panels>
              <Tab.Panel>
                <div className="w-full hover:scale-[1.01] ease-in transition-all duration-100 rounded-3xl h-[35rem] bg-cover brightness-50 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full hover:scale-[1.01] ease-in transition-all duration-100 rounded-3xl h-[35rem] bg-cover bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full hover:scale-[1.01] ease-in transition-all duration-100 rounded-3xl h-[35rem] bg-cover bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
          <div className="">
            <Tab.List className="space-y-0 md:space-y-4 lg:space-y-8 flex flex-row md:flex-col md:justify-start space-x-2 md:space-x-0 pt-0 md:pt-32 ">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "p-4 border-b-2  md:border-b-0 md:border-l-4  cursor-pointer focus:outline-none",
                    selected
                      ? "text-pblue border-b-pblue md:border-l-pblue"
                      : "text-gray-600 border-b-slate-500/50 md:border-l-slate-500/50"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <div className="text-xs md:text-base text-left md:block hidden ">
                      {/* Pay a contact/retailer or send money using a QR */}
                      {item["tab-1"]}
                    </div>
                    <div
                      className={`md:hidden rounded-full w-14 h-14 flex justify-center items-center ${
                        selected
                          ? "text-white bg-indigo-500"
                          : "bg-slate-500/20"
                      }`}
                    >
                      <h1 className="text-3xl font-bold"> 1</h1>
                    </div>
                  </>
                )}
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "p-4 border-b-2  md:border-b-0 md:border-l-4  cursor-pointer focus:outline-none",
                    selected
                      ? "text-pblue border-b-pblue md:border-l-pblue"
                      : "text-gray-600 border-b-slate-500/50 md:border-l-slate-500/50"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <div className="text-xs md:text-base text-left md:block hidden">
                      {/* Checkout with just a Single Click */}
                      {item["tab-2"]}
                    </div>
                    <div
                      className={`md:hidden rounded-full w-14 h-14 flex justify-center items-center ${
                        selected
                          ? "text-white bg-indigo-500"
                          : "bg-slate-500/20"
                      }`}
                    >
                      <h1 className="text-3xl font-bold"> 2</h1>
                    </div>
                  </>
                )}
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "p-4 border-b-2  md:border-b-0 md:border-l-4  cursor-pointer focus:outline-none",
                    selected
                      ? "text-pblue border-b-pblue md:border-l-pblue"
                      : "text-gray-600 border-b-slate-500/50 md:border-l-slate-500/50"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <div className="text-xs md:text-base text-left md:block hidden">
                      {/* Accepting payments with Fpay is absolutely FREE */}
                      {item["tab-3"]}
                    </div>
                    <div
                      className={`md:hidden rounded-full w-14 h-14 flex justify-center items-center ${
                        selected
                          ? "text-white bg-indigo-500"
                          : "bg-slate-500/20"
                      }`}
                    >
                      <h1 className="text-3xl font-bold"> 3</h1>
                    </div>
                  </>
                )}
              </Tab>
            </Tab.List>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default WalletTransfer;
