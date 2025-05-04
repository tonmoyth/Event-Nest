import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import EventCard from './eventCard';

const HomeLayout = () => {
    const eventData = useLoaderData();
    
    return (
        <div>
            <header>
                <Slider></Slider>
            </header>
            <main>
                <EventCard eventData={eventData}></EventCard>
            </main>
        </div>
    );
};

export default HomeLayout;