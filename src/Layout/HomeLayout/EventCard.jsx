import React from 'react';
import SingleCard from './SingleCard';

const EventCard = ({eventData}) => {
    
    return (
        <div className='py-5'>
            <h1 className='text-center text-2xl'>Upcoming Events</h1>
            <div>
                {
                    eventData.map(event => <SingleCard key={event.id} event={event}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default EventCard;