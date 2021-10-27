import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import EventList from './EventList';

const EventDashboard = () => {

    const events = useSelector(state => state.event.events);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList 
                    events={events} 
                />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;