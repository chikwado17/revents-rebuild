import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import EventList from './EventList';
import EventListItemPlaceholder from './EventListItemPlacehoder';
import EventFilters from './EventFilters';

const EventDashboard = () => {

    const events = useSelector(state => state.event.events);
    const loading = useSelector(state => state.async.loading);

 ;

    return (
        <Grid>
            <Grid.Column width={10}>
                {loading && 
                   <>
                    <EventListItemPlaceholder/>
                    <EventListItemPlaceholder/>
                   </>
                }
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFilters />
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;