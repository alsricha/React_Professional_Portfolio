import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12} className="home_social">
                        <a href="https://www.linkedin.com/in/alex-skudrovskis-83204159/">
                            <img
                            src="https://raw.githubusercontent.com/alsricha/React-Portfolio/master/src/assets/images/linkedin-logo.png"
                            width="25px"
                            title="Find Me on Linkedin"
                            alt="Find Me on Linkedin"
                            />
                        </a>
                        <a href="https://github.com/alsricha">
                            <img
                            src="https://raw.githubusercontent.com/alsricha/React-Portfolio/master/src/assets/images/github-logo.png"
                            height="30pxpx"
                            width="32px"
                            title="Find Me Github"
                            alt="Find Me on Github"
                            />
                        </a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-center" md={3}>
                    <p>
                        Copyright &copy; 2020
                    </p>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    <p>
                        Created By Alex skudrovskis
                    </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
