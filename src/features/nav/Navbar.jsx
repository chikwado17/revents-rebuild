import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

const Navbar = ({setFormOpen}) => {

    //function to open form on click
    const handleFormOpen = () => {
        setFormOpen(true);
    }

    return (
        <Menu secondary inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}} />
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button onClick={handleFormOpen} positive inverted content="Create Event" />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default Navbar;
