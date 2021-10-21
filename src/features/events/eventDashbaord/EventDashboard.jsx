import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/apis/sampleData';
import EventList from './EventList';

const EventDashboard = ({ selectEvent }) => {

    const [events, setEvents] = useState(sampleData);
    

    //function to create event
    // const handleCreateEvent = (event) => {
    //     setEvents([...events, event]);
    // }

    // //function to update event
    // const handleEventUpdate = (updatedEvent) => {
    //     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    //     selectEvent(null);
    // }

    //function to delete event by id
    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter(evt => evt.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList 
                    events={events} 
                    selectEvent={selectEvent} 
                    handleDeleteEvent={handleDeleteEvent}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;