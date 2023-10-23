'use client';
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import Heading from "../heading/Heading";
import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import Data from "@/Data/Solutions/solutions.json";
 

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const QRPayment = () => {
  const [fistTab, setFistTab] = useState(true);
  const item = Data["qr-payment"];

  return (
    <div className="bg-gradient-to-b from-transparent via-blue-100 to-transparent">
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <Heading
          main={item.main}
          redMain={item.redMain}
          tagline={item.tagline}
          subheading={item.subheading}
        />
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 mt-20">
          <Tab.Group>
            <div className="col-span-2 md:col-span-1">
              <Tab.List className="space-y-0 md:space-y-4 lg:space-y-8 flex flex-row md:flex-col md:justify-start space-x-2 md:space-x-0 pt-0 md:pt-32 ">
                <div className="mx-auto w-full max-w-md rounded-2xl divide-y divide-pblue bg-transparent p-2 space-y-4">
                  {Data.QRContent.map((content, i) => (
                    <Disclosure key={content.id}>
                      {({ open }) => (
                        <>
                          <Tab
                            defaultindex={0}
                            as="div"
                            className="focus:outline-none group"
                          >
                            <Disclosure.Button
                              key={content.id}
                              className="flex mt-2 w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-base md:text-lg font-bold text-slate-900 hover:text-indigo-700/80 focus:outline-none"
                              onClick={() => setFistTab(true)}
                            >
                              <span>
                                {/* {t(`qr-payment.expand-menu.${i}.main`)} */}
                                {item["expand-menu"][i].main}
                              </span>
                              <ChevronDownIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-slate-900 group-hover:text-indigo-700/80`}
                              />
                            </Disclosure.Button>
                            {fistTab && open && (
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-slate-700">
                                {/* {content.description} */}
                                {item["expand-menu"][i].description}
                              </Disclosure.Panel>
                            )}
                          </Tab>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </Tab.List>
            </div>
            <div className="col-span-2 md:col-span-1 hover:scale-[1.005] transition-all ease-in duration-300 ">
              <Tab.Panels>
                <Tab.Panel>
                  <div className="w-full rounded-3xl h-[35rem] bg-cover brightness-50 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="w-full rounded-3xl h-[35rem] bg-cover bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="w-full rounded-3xl h-[35rem] bg-coverbg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default QRPayment;
