import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';

const Navbar = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const history = useHistory();

    const handleSignOut = () => {
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu secondary inverted fixed='top'>
            <Container>
                <Menu.Item header as={NavLink} exact to={'/'}>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/events'} name='Events' />
                {authenticated &&
                <Menu.Item as={NavLink} to={'/createEvent'}>
                    <Button positive inverted content="Create Event" />
                </Menu.Item>}
                {authenticated ? (<SignInMenu signOut={handleSignOut} />) : (<SignOutMenu setAuthenticated={setAuthenticated} />)}
            </Container>
        </Menu>
    )
}

export default Navbar;
