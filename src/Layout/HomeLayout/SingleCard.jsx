import React from "react";
import { Link } from "react-router";

const SingleCard = ({ event }) => {
    const {thumbnail,name,category,date,location,entry_fee } = event
  return (
    
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={thumbnail}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 h-full">
            <p className="mb-3 text-xs font-semibold flex justify-between tracking-wide uppercase">
              <div>
              date
              <span className="text-gray-600">— {date}</span>
              </div>
              <span>{entry_fee}</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </a>
            <p className="mb-2 ">
            <span className="text-primary font-bold">location</span> : <span>{location}</span>
            </p>
            <p>Category : <span>{category}</span></p>
            <Link className="btn btn-primary">View More</Link>
          </div>
        </div>
     
  );
};

export default SingleCard;
