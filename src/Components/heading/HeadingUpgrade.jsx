import React from "react";

const HeadingUpgrade = ({ main, subHeading, tagLine }) => {
  return (
    <div className="lg:text-center px-2">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        {tagLine}
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {main}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {subHeading}
      </p>
    </div>
  );
};

export default HeadingUpgrade;
