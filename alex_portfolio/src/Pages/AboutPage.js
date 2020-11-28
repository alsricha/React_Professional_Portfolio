import React from 'react';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function AboutPage(props) {

    return(
        <div>
            <Container>
                <Row>
                    <img className="titleImg"
                    src=" https://github.com/alsricha/React_Professional_Portfolio/blob/main/alex_portfolio/src/assets/images/alexlogo.png?raw=true"
                    height="100px"
                    width="50px"
                    title="Alex Skudrovskis logo"
                    alt="personal logo" 
                    />
                </Row>
                <Row>
                <h1 className ="title">
                    {props.title} 
                </h1>
                </Row>
            
            <Content className="Content">

            <p className= "StoryP1">
                My family, from both sides are from Latvia. Which is a country many don't know about-this really came in handy during my younger school days in Social Studies class whenever we'd have to 'pick a country to study'. 
    
            </p>  

            <p className = "StoryP2">
                Ask me about the 'songs' I cleverly created shortly before my presentations that always yielded a good grade! Another fun fact is that I'm the only person in the US with my last name, which will double next year when my fiance and I get married. 
            
            </p>
            <p className ="StoryP3">
                I'm a laid back kind of person- who enjoys having a houseful of friends over just as much as being quarantined at home during this Pandemic. I live with my fiance and our two polar-opposite dogs; one of which has one eye and is alpaca-soft and the other is a couch potato herding pup. I keep LaCroix in business and prefer Costco over Sam's Club hands down
            </p>
            </Content>
            <Row>
                <h1 className ="title">
                    Skills
                </h1>
            </Row>
            <CardGroup>
            <Card>
                <img className="titleImg"
                    src=" https://github.com/alsricha/React_Professional_Portfolio/blob/main/alex_portfolio/src/assets/images/alexlogo.png?raw=true"
                    height="100px"
                    width="50px"
                    title="Alex Skudrovskis logo"
                    alt="personal logo" 
                />
                <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated November 2020</small>
                </Card.Footer>
            </Card>
            <Card>
                <img className="titleImg"
                    src=" https://github.com/alsricha/React_Professional_Portfolio/blob/main/alex_portfolio/src/assets/images/alexlogo.png?raw=true"
                    height="100px"
                    width="50px"
                    title="Alex Skudrovskis logo"
                    alt="personal logo" 
                />
                <Card.Body>
                    <Card.Title>CSS</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated August 2020</small>
                </Card.Footer>
            </Card>
            <Card>
                <img className="titleImg"
                    src=" https://github.com/alsricha/React_Professional_Portfolio/blob/main/alex_portfolio/src/assets/images/alexlogo.png?raw=true"
                    height="100px"
                    width="50px"
                    title="Alex Skudrovskis logo"
                    alt="personal logo" 
                />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated November 2020</small>
                </Card.Footer>
            </Card>
            
            </CardGroup>
            </Container>
        </div>
    );

}

export default AboutPage;