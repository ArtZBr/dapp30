import React from 'react';

import { CardColumns, Card } from 'react-bootstrap';
import { drizzleReactHooks } from '@drizzle/react-plugin';

const Cards = () => {
    const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
        state: drizzleState,
        hello: drizzleState.contracts[0],
        account: drizzleState.accounts[0],
        balance: drizzleState.accountBalances[drizzleState.accounts[0]]
    }))
    const {
        drizzle,
        useCacheCall,
        useCacheEvents,
        useCacheSend
    } = drizzleReactHooks.useDrizzle()
    console.log(drizzleState);
    console.log(drizzle);
    return (
        <CardColumns>

        <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/1025/200/200" />
        <Card.Body>
        <Card.Title>Hello Dapp30 World</Card.Title>
        <Card.Text>
        <span><b>Address:</b> {drizzleState.account}</span>
        <br />
        <span><b>Balance:</b> { drizzle.web3.utils.fromWei(drizzleState.balance) } ETH</span>
        </Card.Text>
        </Card.Body>

        <Card.Footer>
        </Card.Footer>

        </Card>

        <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        </p>
        <footer className="blockquote-footer">
        <small className="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
        </footer>
        </blockquote>
        </Card>

        <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/102/200/100" />
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>

        <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        </p>
        <footer className="blockquote-footer">
        <small className="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
        </footer>
        </blockquote>
        </Card>

        <Card className="text-center">
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
        </Card.Text>
        <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
        </Card.Body>
        </Card>

        <Card>
        <Card.Img src="https://picsum.photos/id/15/200/300" />
        </Card>
        <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
        </p>
        <footer className="blockquote-footer">
        <small className="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
        </footer>
        </blockquote>
        </Card>

        <Card>
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        </Card.Text>
        <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
        </Card.Body>
        </Card>

        </CardColumns>
    )
}

export default Cards
