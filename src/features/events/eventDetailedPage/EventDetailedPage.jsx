import React from 'react'
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

const EventDetailedPage = ({match}) => {

    const events = useSelector(state => state.event.events.find(e => e.id === match.params.id));


    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader events={events} />
                <EventDetailedInfo  events={events} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={events.attendees} />
            </Grid.Column>
        </Grid>
    )
}

export default EventDetailedPage
