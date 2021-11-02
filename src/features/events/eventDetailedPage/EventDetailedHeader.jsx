import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Button, Item, Header } from 'semantic-ui-react';
import { format } from 'date-fns';
    
const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = ({events}) => {
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${events.category}.jpg`} fluid style={eventImageStyle} />

                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content={events.title}
                                    style={{color: 'white'}}
                                />
                                <p>{format(events.date,'MMMM d, yyyy hh:ss a')}</p>
                                <p>
                                    Hosted by <strong>{events.hostedBy}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Cancel My Place</Button>
                <Button color="teal">JOIN THIS EVENT</Button>

                <Button as={Link} to={`/manage/${events.id}?title=${events.title}`} color="orange" floated="right">
                    Manage Event
                </Button>
            </Segment>
        </Segment.Group>
    )
}
    
export default EventDetailedHeader
    