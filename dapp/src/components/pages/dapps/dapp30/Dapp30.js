import React from 'react';
import { Jumbotron, Row, Col} from 'react-bootstrap'

import Day5 from './Day05.js';
//import Day10 from './Day10.js';
import './Dapp30.scss';

//console.log(drizzleStore);
//console.log(drizzle)

const Dapp30 = () => {

    return (
        <>
        <Jumbotron className="th-dapp30-jumbotron">
        <Row>
        <Col>
        <h1>Dapp30 World!</h1>
        <p>
        EatTheBlocks Dapp30 courses for blockchain dapp development on the Ethereum blockchain.
        </p>
        <p>
        <a href="https://eattheblocks.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
        </p>
        <a href="#update-anchor" target="_self" rel="noopener noreferrer" className="btn btn-primary">Current</a>
        <p>
        </p>
        </Col>
        </Row>
        </Jumbotron>
        <h1>Day 1 - 5</h1>
        <Day5 />
        <hr />
        <h1>Day 6 - 10</h1>
        <hr />
        </>
    )
}

export default Dapp30
