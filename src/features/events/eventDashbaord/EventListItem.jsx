import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

const EventListItem = ({event, selectEvent, handleDeleteEvent}) => {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {event.date}
                    <Icon name='marker'/> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={() => handleDeleteEvent(event.id)} color='red' floated='right' content='Delete' />
                <Button  
                    color='teal' 
                    floated='right' 
                    content='View'
                    as={Link} 
                    to={`/events/${event.id}`} 
                />
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem;
