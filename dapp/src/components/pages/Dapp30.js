import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap'

const About = () => {

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
                <Row className="my-4">
                <Col><h1>About</h1></Col>
                </Row>
                <Row>
                <Col>Word!</Col>
                <Col xs={10}>
                <p>
                Lorem ipsum dolor sit amet, praesent eu, laoreet ac sollicitudin metus aenean purus tellus. Hendrerit quis vehicula, vulputate at lacus in aliquam ornare dapibus. Risus justo facilisis cursus dui sit laoreet. Lorem non dignissim, id sed, bibendum id vel orci aenean, quisque vehicula, ac odio maecenas orci tellus. Enim sodales, sed ullamcorper ac sociis. Vulputate mauris molestie sapien nunc fames.
                <p>
                </p>
                Metus lacus vivamus odio ut nec viverra. Viverra tristique erat tellus in molestie ac, ornare non, tempor purus, eget non in sem phasellus. Ut lectus convallis etiam pretium, penatibus ac fusce nonummy penatibus, pellentesque proin phasellus sapien in ac in, quasi platea auctor vestibulum proin nibh et. Primis ipsum, a penatibus fermentum sem eu quam. Aliquam eros, at libero ultrices, lorem sit wisi in imperdiet enim praesent, porta wisi volutpat at lacus, ac quis mollis eu. Inceptos ac eu sed sed et ut, sed massa tincidunt quisque ac, ligula quam sit maecenas, magna nec justo urna mollis faucibus neque. Consequat ultricies consectetuer vel rhoncus. Ac et, platea massa.
                <p>
                </p>
                Curabitur vivamus fermentum in, vitae elit justo. Arcu faucibus dignissim, adipiscing tellus nibh, morbi nam sed nunc viverra a fermentum, viverra nec maiores orci, sit arcu pharetra. Sit non, sed tincidunt, dapibus consectetuer nisl orci eu sit morbi, a et, pretium tincidunt cras lacinia orci. A in sagittis adipiscing ipsum in semper, sed placerat dignissim id justo, eleifend cras per donec, et wisi vitae vitae. Suspendisse condimentum faucibus leo nullam id, ac vivamus enim interdum sollicitudin elit, elit ultrices ultrices accumsan sit, tristique sed et amet parturient etiam. Eleifend libero porttitor amet auctor. Viverra sollicitudin amet nullam, et leo quisque eleifend est blandit magna, ad in ut arcu nulla in, ullamcorper velit nunc molestie nec maecenas, vel per mauris lectus eu. Non aliquet at, pellentesque vel natoque amet nulla vel, feugiat commodo volutpat nunc nunc adipiscing et. Id id dolor, augue condimentum dapibus vehicula.
                </p>
                </Col>
                </Row>
                </Container>
                </>
        )
}

export default About
