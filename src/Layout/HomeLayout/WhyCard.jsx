import React from "react";

const WhyCard = ({ data }) => {
  const { title, description } = data;
  return (

      <div className="relative p-px overflow-hidden transition duration-300 transform border border-gray-300 rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
          <div className="mb-6 mr-6 lg:mb-0">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
              <svg
                className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                {title}
              </h6>
              <p className="mb-2 text-sm text-gray-900">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
   
  );
};

export default WhyCard;
