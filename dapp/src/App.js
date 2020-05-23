import React from 'react';
import './assets/styles/App.scss';

import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Drizzle, generateStore } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";

import Footer from './components/footer/Footer.js';
import Nav from './components/nav/Nav.js';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

function App() {
    return (
        <>
        <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
        <drizzleReactHooks.Initializer>
        <Nav />
        <Footer />
        </drizzleReactHooks.Initializer>
        </drizzleReactHooks.DrizzleProvider>
        </>
    );
}

export default App;
