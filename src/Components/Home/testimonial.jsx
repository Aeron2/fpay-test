import Carousel from "react-elastic-carousel";
import React from "react";
import Image from "next/image";
import { testimonial } from "@/Data/Home/testimonial.js";
import Data from "@/Data/Home/home.json"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
];

const Testimonial = () => {

  return (
    <div className="mt-10 md:mt-18 px-4">
      <div className="flex justify-center px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          {Data.testimonial.heading.main}
          &nbsp;
          <span className="text-red-500">{Data.testimonial.heading.redMain}</span>
        </h2>
      </div>
      <Carousel showArrows={false} breakPoints={breakPoints}>
        {testimonial.map((content) => (
          <div
            className="mb-8 border max-w-2xl mx-2 sm:max-w-4xl md:max-w-lg lg:max-w-sm xl:max-full sm:mx-auto md:mx-4 lg:mx-2 xl:mx-2 mt-12  md:mt-24 lg:mt-32 bg-white  rounded-[2rem] text-gray-900"
            key={content.name + content.id}
          >
            <div className="mx-auto w-12 md:w-32 h-12 md:h-32 relative mt-2 md:-mt-16 border-4 border-white rounded-full overflow-hidden shadow-xl">
              <Image
                className="object-cover object-center h-12 md:h-32"
                src={content.image}
                alt={content.name}
                layout="fill"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">{content.name}</h2>
              <p className="text-gray-500">{content.city}</p>
            </div>
            <div className="mt-4 px-2 md:px-8 pb-12 md:h-64 text-ellipsis overflow-hidden text-center md:text-left">
              <div className="h-40 text-ellipsis">
                <p className="text-base mt-2 text-gray-600 ">
                  {content.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
