import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaTwitterSquare, FaTelegram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import './Footer.scss';
import Logo from '../Logo.js';

const Footer = () => {
    return (
        <footer className="th-footer">
        <Container className="py-5">

        <Row className="justify-content-md-center">
        <Col md="auto"> 
          <a href="https://www.toilethill.io" rel="noopener noreferrer" target="_blank">ToiletHill.io</a>
        </Col>
        <Col md="auto"> 
          <a variant="primary" href="https://www.heathrobertson.com" rel="noopener noreferrer" target="_blank">Heath Robertson</a>
        </Col>
        <Col md="auto"> 
          <a variant="primary" href="mailto:CodeHappens@ToiletHill.io?subject=From%20Dapp30" rel="noopener noreferrer" target="_blank">CodeHappens@ToiletHill.io</a>
        </Col>
        </Row>

        <Row className="justify-content-md-center">
        <Col md="auto my-5" className="th-footer-icon-logo"> 
        <Logo logoType={'icon'} />
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="auto"> 
        <IconContext.Provider value={{className:"th-footer-icons", size:"2em"}}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary"><FaTwitterSquare /></Button>
              <Button variant="secondary"><FaTelegram /></Button>
              <Button variant="secondary"><FaLinkedin /></Button>
              <Button variant="secondary"><FaFacebookSquare /></Button>
            </ButtonGroup>
            </IconContext.Provider>
        </Col>
        </Row>

        </Container>
        </footer>

    );
}

export default Footer;
