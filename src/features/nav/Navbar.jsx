import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';

const Navbar = () => {

    const authenticated = useSelector(state => state.auth.authenticated);

    return (
        <Menu secondary inverted fixed='top'>
            <Container>
                <Menu.Item header as={NavLink} exact to={'/'}>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/events'} name='Events' />
                <Menu.Item as={NavLink} to={'/test'} name='Sanbox' />
                {authenticated &&
                <Menu.Item as={NavLink} to={'/createEvent'}>
                    <Button positive inverted content="Create Event" />
                </Menu.Item>}
                {authenticated ? (<SignInMenu />) : (<SignOutMenu />)}
            </Container>
        </Menu>
    )
}

export default Navbar;
