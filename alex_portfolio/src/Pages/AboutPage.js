import React from 'react';
import Content from '../components/Content';
import Skills from '../components/Skills';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


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
            </Container>
        </div>
    );

}

export default AboutPage;