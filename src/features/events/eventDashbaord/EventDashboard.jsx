import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/apis/sampleData';
import EventForm from '../eventform/EventForm';
import EventList from './EventList';

const EventDashboard = ({formOpen, setFormOpen}) => {

    const [events, setEvents] = useState(sampleData);

    return (
        <Grid>
            <Grid.Column width={10}>
              <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
               <EventForm setFormOpen={setFormOpen} />}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;