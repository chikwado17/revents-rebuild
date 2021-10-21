import React from 'react'
import EventListItem from './EventListItem';

const EventList = ({events, selectEvent, handleDeleteEvent}) => {
    return (
        <div>
            {events && events.map(event => (
                <EventListItem 
                    handleDeleteEvent={handleDeleteEvent}
                    selectEvent={selectEvent} 
                    event={event} 
                    key={event.id} 
                />
            ))}
        </div>
    )
}

export default EventList;
