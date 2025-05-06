import React from "react";
import { useLoaderData } from "react-router";
import Event from "./Event";
import Marquee from "react-fast-marquee";
import Modal from "../components/Modal/Modal";
import { Helmet } from "react-helmet-async";

const Events = () => {
  const eventsData = useLoaderData();

  return (
    <div>
        <Helmet>
            <title>Events</title>
        </Helmet>
      <div className="event-title flex flex-col items-center space-y-2">
        <span className="uppercase px-3 py-2 font-bold text-primary border border-primary rounded-2xl">
          Event Schedule
        </span>
        <h1 className="text-2xl md:text-4xl font-bold">Join The Events</h1>
      </div>
      <div>
        {eventsData.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
      <div>
        <Modal></Modal>
      </div>
      <div className="my-10">
        <Marquee pauseOnHover>
            <p className="text-2xl">International Tech Summit 2025 || Creative Writing Workshop || National Football Championship ||  Modern Art Expo</p>
        </Marquee>
      </div>
    </div>
  );
};

export default Events;
