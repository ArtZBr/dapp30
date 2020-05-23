import React from 'react';
import { Jumbotron, Row, Col} from 'react-bootstrap'

import './Emurgo.scss';

//console.log(drizzleStore);
//console.log(drizzle)

const Dapp30 = () => {

    return (
        <>
        <Jumbotron className="th-emurgo-jumbotron">
        <Row>
        <Col>
        <h1>Cardano World!</h1>
        <p>
        This intensive course deals with the various blockchain technologies prevalent now in the Ecosystem  – Ethereum, Hyperledger-Fabric and Cardano.
        </p>
        <p>
        <a href="https://emurgo.in/emurgo-academy-workpro/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
        </p>
        </Col>
        </Row>
        </Jumbotron>
        </>
    )
}

export default Dapp30
