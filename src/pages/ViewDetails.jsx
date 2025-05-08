import React from "react";
import { useLoaderData, useParams } from "react-router";
import ReserveForm from "./ReserveForm";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const eventData = useLoaderData();
  const { id } = useParams();

  const event = eventData.find((event) => event.id == id);
  

  return (
    <div>
      <Helmet>
        <title>Event Details</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-md rounded-xl overflow-hidden">
      <figure className="w-full lg:w-1/3">
        <img
          src={event.thumbnail}
          alt={event.name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body flex-1">
        <h2 className="card-title text-2xl font-bold">{event.name}</h2>
        <p>
          <span className="font-semibold text-gray-700">Location :</span>{" "}
          {event.location}
        </p>
        <p>{event.category}</p>
        <p className="text-sm text-gray-500">{event.date}</p>
        <div className="flex justify-end items-end mt-auto">
          <p className="text-lg font-semibold">{event.entry_fee}</p>
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
