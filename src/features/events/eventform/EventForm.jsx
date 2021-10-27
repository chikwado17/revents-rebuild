import React, { useState } from 'react';
import cuid from 'cuid';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const EventForm = ({match, history}) => {

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    const dispatch = useDispatch();

    const initialState = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '' 
    }

    const [values, setValues] = useState(initialState);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});  
    }

   
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            attendees: [], 
            id: cuid(), 
            hostedBy: 'Bob',
            hostPhotoURL: '/assets/user.png'
        }


        //if there is not selected event then create, but if there is a selected event then update
        selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})): dispatch(createEvent({...values, ...data }));
        
        history.push('/events');
    }


    return (
       <Segment clearing>
           <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />

           <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" name="title" value={values.title} onChange={handleInputChange} placeholder='Event title' />
                </Form.Field>
                
                <Form.Field>
                    <input type="text" name="category" value={values.category} onChange={handleInputChange} placeholder='Category' />
                </Form.Field>

                <Form.Field>
                    <input type="text" name="description" value={values.description} onChange={handleInputChange} placeholder='Description' />
                </Form.Field>

                <Form.Field>
                    <input type="text" name="city" value={values.city} onChange={handleInputChange} placeholder='City' />
                </Form.Field>

                <Form.Field>
                    <input type="text" name="venue" value={values.venue} onChange={handleInputChange} placeholder='Venue' />
                </Form.Field>

                <Form.Field>
                    <input type="date" name="date" value={values.date} onChange={handleInputChange} placeholder='Date' />
                </Form.Field>

                <Button type='submit' floated='right' positive content='Submit' />
                <Button as={Link} to='/events' type='submit' floated='right'  content='Cancel' />
           </Form>
       </Segment>
    )
}

export default EventForm;
