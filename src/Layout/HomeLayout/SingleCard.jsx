import React from "react";
import { Link } from "react-router";
import Button from "../../components/Header/Button/Button";

const SingleCard = ({ event }) => {
  return (
    <div className="card w-full max-w-md bg-base-100 hover:shadow-xl">
      <figure>
        <img
          src={event.thumbnail}
          alt={event.name}
          className="h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body border-x-1 border-b-1 border-gray-200 rounded-b-xl">
        <div className="flex justify-between text-sm text-gray-500 font-semibold">
          <span>📅 {event.date}</span>
          <span>{event.entry_fee}</span>
        </div>

        <h2 className="card-title text-xl font-bold">{event.name}</h2>

        <p>
          <span className="font-semibold">Location :</span>{" "}
          {event.location}
        </p>
        <p>
          <span className="font-semibold">Category :</span> {event.category}
        </p>

        <div>
          <Link to={`/viewDetails/${event.id}`}>
            <Button level="View More"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
