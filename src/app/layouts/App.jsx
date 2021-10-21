import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/events/eventDashbaord/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/homepage/HomePage';
import EventDetailedPage from '../../features/events/eventDetailedPage/EventDetailedPage';
import EventForm from '../../features/events/eventform/EventForm';


const App = () => {
  return ( 
    <>
      <Route path='/' exact component={HomePage}/>
          <Route path={'/(.+)'} render={() => (
            <div>
              <Navbar />
                  <Container className='main'>
                      <Switch>
                          <Route exact path='/events' component={EventDashboard} />
                          <Route path='/events/:id' component={EventDetailedPage} />
                          <Route path='/createEvent' component={EventForm} />
                          <Route path='/manage/:id' component={EventForm} />
                      </Switch>
                  </Container>
            </div>
          )}/>
    </>
  );
}

export default App;
