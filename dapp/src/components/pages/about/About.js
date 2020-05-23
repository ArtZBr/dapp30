import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { Carousel, Container, Row, Col } from 'react-bootstrap'
import path from './about.md';

const About = () => {
    const [aboutMd, setMarkdown] = useState('# Markdown');

    useEffect(() => {
        const fetchData = () => {
            fetch(path)
                .then(resp => {
                    return resp.text();
                })
                .then(text => {
                    console.log(text);
                    setMarkdown(text);
                });
        }
        fetchData();
    }, []);

    return (
        <>
        <Carousel>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://picsum.photos/id/1043/800/400"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://picsum.photos/id/1037/800/400"
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://picsum.photos/id/10/800/400"
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

        <Container fluid>

        <Row className="my-5">
        <Col><h1>About</h1></Col>
        </Row>

        <Row>
        <Col>
        Heath Robertson
        </Col>
        <Col xs={10}>
        <ReactMarkdown source={aboutMd} />
        </Col>
        </Row>

        </Container>
        </>
    )
}

export default About
