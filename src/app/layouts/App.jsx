import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashbaord/EventDashboard';
import Navbar from '../../features/nav/Navbar';


const App = () => {

  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectedEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  }
  
  return ( 
    <>
      <Navbar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard selectEvent={handleSelectedEvent} selectedEvent={selectedEvent} formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
