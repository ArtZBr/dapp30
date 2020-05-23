import React from 'react';
import { CardColumns, Card, Badge } from 'react-bootstrap';

import { drizzleReactHooks } from '@drizzle/react-plugin';

import Hello from './HelloWorld.js';
import SimpleStorage from './SimpleStorage.js';
import AdvancedStorage from './AdvancedStorage.js';


const Cards = () => {
    const { drizzle } = drizzleReactHooks.useDrizzle()
    const state = drizzle.store.getState();
    const account = state.accounts[0];
    console.log(state.accountBalances[account]);
    return (
        <CardColumns>

        <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/1025/200/200" />
        <Card.Body>
        <Card.Title>Day 1 - Intro</Card.Title>
        <Card.Text>
        <span><b>Address:</b> {account}</span>
        <br />
        <span><b>Balance:</b> {account && 
            drizzle.web3.utils.fromWei(state.accountBalances[account]) 
        } ETH</span>
        </Card.Text>
        </Card.Body>
        </Card>

        <Card bg="info" text="white" className="text-left p-3">
        <blockquote className="blockquote mb-0 card-body">
        <p>
        No deployed contract for Day 1, just interacting with the Drizzle state object.
        </p>
        <footer className="text-light blockquote-footer">
        <small>
        CodeHappens @<cite title="Source Title">ToiletHill</cite>
        </small>
        </footer>
        </blockquote>
        </Card>

        <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/102/200/100" />
        <Card.Body>
        <Card.Title>Day 2 - HelloWorld</Card.Title>
        <Card.Text>
            Returned from the <b>HelloWorld</b> contract: <Badge variant="primary"><Hello /></Badge>
        </Card.Text>
        </Card.Body>
        </Card>

        <Card bg="primary" text="white" className="text-left p-3">
        <blockquote className="blockquote mb-0 card-body">
        <p>
        Write tests! It helps tremendously in learning how to interact with the contracts.
        </p>
        <footer className="text-light blockquote-footer">
        <small>
        CodeHappens @<cite title="Source Title">ToiletHill</cite>
        </small>
        </footer>
        </blockquote>
        </Card>

        <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/102/200/100" />
        <Card.Body>
        <Card.Title>Day 3 - SimpleStorage</Card.Title>
        <Card.Text>
            A <b>SimpleStorage</b> contract demonstrating reading and writing to a contract.
        </Card.Text>
            <SimpleStorage />
        </Card.Body>
        </Card>

        <Card >
        <Card.Img src="https://picsum.photos/id/34/200/100" />
        <Card.Body>
        <Card.Title>Day 4 - AdvancedStorage</Card.Title>
        <Card.Text>
        Interacting with <b>AdvancedStorage</b> contract. Read, write, and some reporting.
        </Card.Text>
            <AdvancedStorage />
        </Card.Body>
        </Card>

        <Card>
        <Card.Img src="https://picsum.photos/id/15/200/300" />
        </Card>

        <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
        <p>
        See the <a href="/about">About</a> page for a list of development tools.
        </p>
        <footer className="blockquote-footer">
        <small className="text-muted">
        Heath @<cite title="Source Title">ToiletHill</cite>
        </small>
        </footer>
        </blockquote>
        </Card>

        <Card>
        <Card.Img src="https://picsum.photos/id/25/200/100" />
        <Card.Body>
        <Card.Title>Day 5</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        </Card.Text>
        </Card.Body>
        </Card>

        </CardColumns>
    )
}

export default Cards
