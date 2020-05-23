import React from 'react';
import { Jumbotron, Row, Col} from 'react-bootstrap'
import Logo from '../../Logo.js'

import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Drizzle, generateStore } from "@drizzle/store";
import drizzleOptions from "../../../drizzleOptions";

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

//console.log(drizzleStore);
//console.log(drizzle)

const Dapps = () => {

    return (
        <>
        <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
        <drizzleReactHooks.Initializer>
        <Jumbotron>
        <Row xs={1} sm={1} md={2} lg={2} xl={2}>
        <Col>
        <Logo logoType={'full'} />
        </Col>
        <Col>
        <h1>Hello Dapp30 World!</h1>
        <p>
        EatTheBlocks Dapp30 courses for blockchain dapp development on the Ethereum blockchain.
        </p>
        <p>
        <a href="https://eattheblocks.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
        </p>
        </Col>
        </Row>
        </Jumbotron>

        </drizzleReactHooks.Initializer>
        </drizzleReactHooks.DrizzleProvider>
        </>
    )
}

export default Dapps
