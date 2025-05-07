import React from "react";
import { useLoaderData, useParams } from "react-router";
import ReserveForm from "./ReserveForm";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const eventData = useLoaderData();
  const { id } = useParams();

  const select = eventData.find((event) => event.id == id);
  const { thumbnail, name, location, entry_fee, category, date } = select;

  return (
    <div>
      <Helmet>
        <title>Event Details</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-1/3 h-[300px]">
          <img src={thumbnail} alt="Album" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>Location : {location}</p>
          <p>{category}</p>
          <span>{date}</span>
          <div className="card-actions justify-end">
            <span>{entry_fee}</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mx-auto py-10">
        <ReserveForm></ReserveForm>
      </div>
    </div>
  );
};

export default ViewDetails;
