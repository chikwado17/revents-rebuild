import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashbaord/EventDashboard';
import Navbar from '../../features/nav/Navbar';


const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  return ( 
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
