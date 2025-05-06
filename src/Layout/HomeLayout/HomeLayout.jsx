import React from 'react';
import Slider from './Slider';
import { useLoaderData } from 'react-router';
import EventCard from './eventCard';
import Feature from './Feature';
import Count from './Count';
import WhyChoose from './WhyChoose';
import { Helmet } from 'react-helmet-async';


const HomeLayout = () => {
    const eventData = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <header>
                <Slider></Slider>
            </header>
            <main>
                <EventCard eventData={eventData}></EventCard>
                <WhyChoose></WhyChoose>
                <Feature></Feature>
                <Count></Count>
                
            </main>
        </div>
    );
};

export default HomeLayout;