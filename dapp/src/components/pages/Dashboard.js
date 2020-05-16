import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

const Dashboard = () => {

        return (
                <>
                <Container fluid>
                <Row className="my-4">
                <Col><h1>Dashboard</h1></Col>
                </Row>
                <Row>
                <Col>Word!</Col>
                <Col xs={10}>

                <CardGroup>
                <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/1023/100/80" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/1043/100/80" />
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
                <Card>
                <Card.Img variant="top" src="https://picsum.photos/id/1015/100/80" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                </CardGroup>

                </Col>
                </Row>
                </Container>
                </>
        )
}

export default Dashboard

