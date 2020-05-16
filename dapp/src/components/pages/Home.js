import React from 'react';
import { Jumbotron, Row, Col} from 'react-bootstrap'

import Cards from '../Cards.js'
import Logo from '../Logo.js'

const Home = () => {

        return (
                <>
                <Jumbotron>
                <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                <Col>
                <Logo logoType={'full'} />
                </Col>
                <Col>
                <h1>Hello, Dapp30 World!</h1>
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

export default Home
