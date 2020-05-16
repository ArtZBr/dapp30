import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

//import { drizzleReactHooks } from '@drizzle/react-plugin';
//import { DrizzleContext } from "@drizzle/react-plugin";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Drizzle } from "@drizzle/store";

import drizzleOptions from "./drizzleOptions";
import './assets/styles/App.scss';
import LoadingContainer from './components/LoadingContainer.js';
//import Controller from './components/Controller.js'
import Logo from './components/Logo.js';
import Home from './components/pages/Home.js';
import Dapp30 from './components/pages/Dapp30.js';
import About from './components/pages/About.js';
import Dashboard from './components/pages/Dashboard.js';

const drizzle = new Drizzle(drizzleOptions);

function App() {
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
        <Link to="/Dapp30" className="nav-link">Dapp30</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>

        <NavDropdown title="Dapp30" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>

        </Navbar.Collapse>
        </Navbar>

        <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
        <LoadingContainer drizzle={drizzle}>

        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/About"><About /></Route>
        <Route exact path="/Dapp30"><Dapp30 /></Route>
        <Route exact path="/Dashboard"><Dashboard /></Route>
        </Switch>

        </LoadingContainer>
        </drizzleReactHooks.DrizzleProvider>

        </Container>
        </Router>
    );
}

export default App
