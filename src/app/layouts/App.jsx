import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/events/eventDashbaord/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/homepage/HomePage';
import EventDetailedPage from '../../features/events/eventDetailedPage/EventDetailedPage';
import EventForm from '../../features/events/eventform/EventForm';
import Testing from '../../features/playground/Testing';
import { useLocation } from 'react-router-dom';


const App = () => {


  //function to unmount form
  const location = useLocation();
  return ( 
    <>
      <Route path='/' exact component={HomePage}/>
          <Route path={'/(.+)'} render={() => (
            <div>
              <Navbar />
                  <Container className='main'>
                      <Switch>
                          <Route exact path='/events' component={EventDashboard} />
                          <Route exact path='/test' component={Testing} />
                          <Route path='/events/:id' component={EventDetailedPage} />
                          <Route path='/createEvent' component={EventForm} />
                          <Route path='/manage/:id' key={location.key} component={EventForm} />
                      </Switch>
                  </Container>
            </div>
          )}/>
    </>
  );
}

export default App;
