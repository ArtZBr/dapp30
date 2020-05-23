import React from 'react';
import { Jumbotron, Row, Col} from 'react-bootstrap'

import Cards from './Cards.js';
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
        </Col>
        </Row>
        </Jumbotron>
        <Cards />
        </>
    )
}

export default Dapp30
