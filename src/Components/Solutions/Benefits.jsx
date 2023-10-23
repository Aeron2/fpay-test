import React from "react";

const Benefits = ({ title, description, imageSrc }) => {
  return (
    <div key={title} className="px-2">
      <img src={imageSrc} alt="dynamic qr images" className="h-24 w-auto" />
      <h3 className="mt-6 text-lg font-semibold text-gray-700">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default Benefits;
