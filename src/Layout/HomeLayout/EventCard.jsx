import React from 'react';
import SingleCard from './SingleCard';

const EventCard = ({eventData}) => {
    
    return (
        <div className='py-14'>
            <h1 className='text-center text-3xl font-bold'>Upcoming <span className='text-primary'>Events</span></h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
                {
                    eventData.map(event => <SingleCard key={event.id} event={event}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default EventCard;