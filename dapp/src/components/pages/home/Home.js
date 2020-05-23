import React from 'react';

import { Jumbotron, Row, Col, Card } from 'react-bootstrap'

import Logo from '../../Logo.js'

const url = 'https://www.youtube.com/embed/L_LUpnjgPso';

const Home = () => {

    return (
        <>
        <Jumbotron>
        <Row xs={1} sm={1} md={2} lg={2} xl={2}>
        <Col>
        <Logo logoType={'full'} />
        </Col>
        <Col>
        <h1>Hello Dapp World!</h1>
        <p>
        Building Applications that integrate with blockchains.
        </p>
        </Col>
        </Row>
        </Jumbotron>

        <Card className="text-center mb-5">
        <Card.Header>Setup</Card.Header>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe
        className="embed-responsive-item"
        title="Instructions"
        src={url}
        frameBorder="0"
        allow="accelerometer;
        autoplay;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowFullScreen>
        </iframe>
        </div>
        <Card.Footer className="text-muted">Ethereum Blockchain</Card.Footer>
        </Card>

        </>
    )
}

export default Home
