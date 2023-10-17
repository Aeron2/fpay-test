import { CheckIcon, XIcon } from "@heroicons/react/solid";
import Data from "@/Data/Home/Home.json";
import Heading from "../heading/Heading";
import React from "react";

const Comparison = () => {
  const item = Data["comparison-section"];
  // const comparisonData = "Data.comparison-section.comparison.comparision-data";
  const comparisonData =
    item.comparison["comparision-data"];
  // console.log(comparisonData)

  return (
    <div className="mt-6 py-10 container mx-auto px-4 sm:px-8 bg-gradient-to-t md:rounded-3xl">
      <div className="py-4">
        <div className="flex justify-center">
          <Heading
            main={item.heading.main}
            redMain={item.heading.redMain}
            tagline={item.heading.tagline}
            subheading={item.heading.subheading}
          />
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto ">
          {/* desktop view */}
          <div className="hidden lg:inline-block min-w-full overflow-hidden ">
            <table className="min-w-full leading-normal cursor-pointer">
              <thead>
                <tr>
                  <th className="px-5 py-6 border-gray-200"></th>
                  <th className="px-5 py-6 border-gray-200 text-left text-lg bg-slate-800 rounded-tl-2xl font-bold text-gray-100">
                    <div className="flex justify-center">
                      {item.comparison["f-pay"]}
                    </div>
                    <hr className="mt-4 border-1 border-gray-400" />
                  </th>
                  <th className="px-5 py-3 border-gray-200 text-left text-lg font-bold text-gray-900 bg-white rounded-tr-2xl">
                    <div className="flex justify-center">
                      {/* {Other Payment Gateways} */}
                      {item.comparison["others"]}
                    </div>
                    <hr className="mt-4 border-1 border-gray-700" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((data, index) => (
                  <tr key={data.row}>
                    <td className="px-5 py-5 text-base font-bold text-slate-900 w-1/4">
                      <div className="flex justify-start">
                        <div className="flex-shrink-0 w-40 h-10">
                          <h1>
                            {/* {data.topic} */}
                            {/* {(`data.${index}.topic`)} */}
                            {data["topic"]}
                          </h1>
                        </div>
                      </div>
                    </td>

                    {/* F-Pay side */}
                    <td
                      className={`px-10 py-5 bg-slate-800 text-base w-1/3 ${
                        index === comparisonData.length - 1
                          ? `rounded-bl-2xl pb-12`
                          : ``
                      }`}
                    >
                      <div className="flex justify-left">
                        <div>
                          <p className="text-gray-100 whitespace-no-wrap font-semibold inline-flex">
                            <span>
                              <CheckIcon className="w-4 h-6 mr-1 text-green-300" />
                            </span>
                            {/* {data.fpay.main} */}
                            {/* {(`${comparisonData}.${index}.fpay.main`)} */}
                            {data.fpay["main"]}
                          </p>
                          {data.fpay.content.map((content, i) => (
                            <ul
                              key={content.id}
                              className="list-disc text-gray-300 whitespace-no-wrap font-medium text-xs pl-8"
                            >
                              <li>
                                {/* {content.point} */}
                                {/* {(
                                  `${comparisonData}.${index}.fpay.content.${i}.point`
                                )} */}
                                {content["point"]}
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </td>

                    {/* Other Payments */}
                    <td
                      className={`px-5 py-5 border-gray-200 bg-white text-sm w-1/3 ${
                        index === comparisonData.length - 1
                          ? `rounded-br-2xl pb-12`
                          : ``
                      }`}
                    >
                      <div className="flex justify-start px-10">
                        <div>
                          <p className="text-gray-900 text-left whitespace-no-wrap font-semibold text-base inline-flex">
                            <span>
                              <XIcon className="w-4 h-6 mr-1 text-red-500" />
                            </span>
                            {/* {data.otherPayments.main} */}
                            {/* {(`${comparisonData}.${index}.otherPayments.main`)} */}
                            {data.otherPayments["main"]}

                          </p>
                          {data.otherPayments.content.map((content, i) => (
                            <ul
                              key={content.id}
                              className="list-disc text-gray-700 whitespace-no-wrap font-medium text-xs pl-8"
                            >
                              <li>
                                {/* {content.point} */}
                                {/* {(
                                  `${comparisonData}.${index}.otherPayments.${i}.point`
                                )} */}
                                {content["point"]}
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          {/* <MobileView/> */}
        </div>
      </div>
    </div>
  );
};

export default Comparison;

function MobileView(params) {
  return (
    <div className="flex flex-col lg:hidden min-w-full overflow-hidden ">
      <table className="min-w-full leading-normal cursor-pointer">
        <thead>
          <tr>
            <th className="px-5 py-6 text-left text-2xl bg-slate-800 rounded-t-2xl font-bold text-gray-100">
              <div className="flex justify-center">
                {(`comparison-section.comparison.f-pay`)}
              </div>
              {/* <hr className="mt-4 border-1 border-gray-400" /> */}
            </th>
          </tr>
        </thead>
        <tbody>
          {ComparisonData.map((data, index) => (
            <tr key={data.row}>
              {/* F-Pay side */}
              <td
                className={`px-10 py-5 bg-slate-800 text-base w-1/3 ${
                  index === ComparisonData.length - 1
                    ? `rounded-b-2xl pb-12`
                    : ``
                }`}
              >
                <div className="flex justify-left">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {/* {data.topic} */}
                      {(`${comparisonData}.${index}.topic`)}
                    </h3>
                    <p className="text-gray-100 whitespace-no-wrap font-semibold inline-flex">
                      <span>
                        <CheckIcon className="w-4 h-6 mr-1 text-green-300" />
                      </span>
                      {/* {data.fpay.main} */}
                      {(`${comparisonData}.${index}.fpay.main`)}
                    </p>
                    {data.fpay.content.map((content, i) => (
                      <ul
                        key={content.id}
                        className="list-disc text-gray-300 whitespace-no-wrap font-medium text-xs pl-8"
                      >
                        <li>
                          {/* {content.point} */}
                          {(
                            `${comparisonData}.${index}.fpay.content.${i}.point`
                          )}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="mt-12 min-w-full leading-normal cursor-pointer bg-gray-200/50 rounded-2xl">
        <thead>
          <tr>
            <th className="px-5 py-3 border-gray-700 text-left  text-2xl font-bold text-gray-900">
              <div className="flex justify-center">
                {/* {Other Payment Gateways} */}
                {(`comparison-section.comparison.others`)}
              </div>
              <hr className="mt-4 border-1 border-gray-700" />
            </th>
          </tr>
        </thead>
        <tbody>
          {ComparisonData.map((data, index) => (
            <tr key={index}>
              {/* Other Payments */}
              <td className="px-5 py-5 border-gray-700 text-sm w-1/3">
                <div className="flex justify-start px-6">
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">
                      {/* {data.topic} */}
                      {(`${comparisonData}.${index}.topic`)}
                    </h3>
                    <p className="text-gray-900 text-left whitespace-no-wrap font-semibold text-base inline-flex">
                      <span>
                        <XIcon className="w-4 h-6 mr-1 text-red-500" />
                      </span>
                      {/* {data.otherPayments.main} */}
                      {(`${comparisonData}.${index}.otherPayments.main`)}
                    </p>
                    {data.otherPayments.content.map((content, i) => (
                      <ul
                        key={content.id}
                        className="list-disc text-gray-700 whitespace-no-wrap font-medium text-xs pl-8"
                      >
                        <li>
                          {/* {content.point} */}
                          {(
                            `${comparisonData}.${index}.otherPayments.${i}.point`
                          )}
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
