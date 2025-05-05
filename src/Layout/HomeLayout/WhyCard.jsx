import React from "react";

const WhyCard = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div className="w-full items-center p-4 sm:flex sm:space-x-6 shadow-sm">
      <div className="flex-shrink-0 w-[100px] h-24 sm:h-32 sm:w-32 sm:mb-0">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
