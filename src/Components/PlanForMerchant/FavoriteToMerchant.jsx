"use client";
import Heading from "../heading/Heading";
import React from "react";
import Data from "@/Data/PlanForMerchant/planForMerchant.json";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
const FavoriteToMerchant = () => {
  const item = Data.Favorites;
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="relative overflow-hidden">
        <main>
          {/* Blog section */}
          <div className="relative bg-gray-50 py-16 sm:py-16 lg:py-16">
            <div className="relative">
              <Heading
                main={item.heading.main}
                redMain={item.heading.redMain}
                tagline={item.heading.tagline}
                subheading={item.heading.subheading}
              />

              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 md:grid-cols-2 lg:px-8 lg:grid-cols-3 md:max-w-7xl">
                {item["favorite-cards"].map((favorite, i) => (
                  <div
                    key={favorite.id}
                    className="flex flex-col rounded-3xl shadow-lg overflow-hidden hover:scale-[1.015] cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        // src={favorite.imageUrl}
                        src={favorite.imageUrl}
                        alt="Favorite Image"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between justfy-end">
                      <div className="flex-1">
                        <Link
                          href={`${favorite.href}`}
                          className="block mt-2 h-full"
                        >
                          <p className="text-xl font-semibold text-gray-900">
                            {favorite.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {favorite.preview}
                            {/* {`favorites.${i}.preview`} */}
                          </p>
                          <div className=" text-pred flex items-center space-x-2 mt-12 justify-self-end">
                            <span className="text-sm">Find Out More</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-pred  font-bold"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FavoriteToMerchant;
