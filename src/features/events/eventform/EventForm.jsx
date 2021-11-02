import React from 'react';
import cuid from 'cuid';
import { Button, FormField, Header, Segment } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import MyDateInput from '../../../app/common/form/MyDateInput';



const EventForm = ({match, history}) => {

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    const dispatch = useDispatch();

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '' 
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('You must add the title'),
        category: Yup.string().required(),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required()

    });


    const categoryData = [
        {key: 'drinks', text: 'Drinks', value: 'drinks'},
        {key: 'culture', text: 'Culture', value: 'culture'},
        {key: 'film', text: 'Film', value: 'film'},
        {key: 'food', text: 'Food', value: 'food'},
        {key: 'music', text: 'Music', value: 'music'},
        {key: 'travel', text: 'Travel', value: 'travel'},
    ];
   

    return (
       <Segment clearing>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const data = {
                        attendees: [], 
                        id: cuid(), 
                        hostedBy: 'Bob',
                        hostPhotoURL: '/assets/user.png'
                    }
                    //if there is not selected event then create, but if there is a selected event then update
                    selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})): dispatch(createEvent({...values, ...data }));
                    history.push('/events');
                }}
            >

                {({isSubmitting, dirty, isValid}) => (
                    <Form className='ui form'>
                        <FormField>
                            <Header sub color='teal' content='Event Details' />
                                <MyTextInput name='title' placeholder='Enter event title' />
                                <MySelectInput name='category' placeholder='Category' options={categoryData} />
                                <MyTextArea name='description' placeholder='Description' rows={3} />
                            <Header sub color='teal' content='Event Location Details' />
                                <MyTextInput name='city' placeholder='City' />
                                <MyTextInput name='venue' placeholder='Venue' />
                                <MyDateInput
                                    name='date' placeholderText='Date' 
                                    timeFormat='HH:mm'
                                    showTimeSelect
                                    timeCaption='time'
                                    dateFormat='MMMM d, yyyy h:mm a'
                                /> 
                        </FormField>
                        <Button 
                            type='submit' 
                            floated='right' 
                            positive 
                            content='Submit'
                            loading={isSubmitting} 
                            disabled={!isValid || !dirty || isSubmitting}
                        />
                        <Button disabled={isSubmitting} as={Link} to='/events' type='submit' floated='right'  content='Cancel' />
                    </Form>
                )}
           </Formik>
       </Segment>
    )
}

export default EventForm;
