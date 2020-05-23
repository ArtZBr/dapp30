import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../pages/home/Home.js';
import About from '../pages/about/About.js';
import Dapp30 from '../pages/dapps/dapp30/Dapp30.js';
import Emurgo from '../pages/dapps/emurgo/Emurgo.js';

import Logo from '../Logo.js';

const Navigation = () => {
    return (
        <Router>
        <Container>

        <Navbar  expand="lg">
        <Navbar.Brand href="/"> <Logo logoType={'header'} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>

        <NavDropdown title="Dapps" id="basic-nav-dropdown">
        <NavDropdown.Item href="/dapp30">Eat The Blocks</NavDropdown.Item>
        <NavDropdown.Item href="/emurgo">Emurgo</NavDropdown.Item>
        </NavDropdown>
        </Nav>

        </Navbar.Collapse>
        </Navbar>

        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/About"><About /></Route>
        <Route exact path="/Dapp30"><Dapp30 /></Route>
        <Route exact path="/Emurgo"><Emurgo /></Route>
        </Switch>


        </Container>
        </Router>

    );
}

export default Navigation;
