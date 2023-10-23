"use client";
import React, { useEffect } from "react";
import Plane from "./Plane.jsx"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "@/Data/Home/home.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="relative" data-aos="zoom-in-up">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          {Data.slider.map((item, index) => (
            <div key={index}>
              <ImageWithText item={item} router={router} />
            </div>
          ))}
        </Carousel>
        <div className="absolute z-10  md:top-[50vh]  -translate-y-1/2 -translate-x-full animate-plane ">
          <div className="scale-50">
            <Plane />
          </div>
        </div>
        {/* <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}
      </div>
    </>
  );
}

export default Banner;

function ImageWithText({ item, router }) {
  // const router = useRouter();
  return (
    <div className="relative ">
      <img loading="lazy" src={item.image} alt="Picture of the author"  />
      <div className="absolute top-24  left-48  ">
        <div className="text-center flex items-center justify-start font-bold text-5xl">
          {item.heading} <br /> {item.heading2}
        </div>
        <div className="mt-6 text-xl font-light hel">{item.subheading}</div>
        <div className="hel">
          <button
            className="  px-12 py-2 rounded-3xl  bg-blue-800 text-white mt-12"
            type="button"
            onClick={() => router.push(item.link)}
          >
            Button Data
          </button>
        </div>
      </div>
    </div>
  );
}

