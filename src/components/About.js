import React from 'react'
import '../css/about.css'
import { Container, Row, Col, Toast, ToastBody} from 'reactstrap';
import reactIcon from '../img/react.svg'
import html5 from '../img/html5.png'
import css3 from '../img/css3.svg'
import js from '../img/js.png'
import python from '../img/python.png'
import java from '../img/java.png'
import node from '../img/node.png'
import express from '../img/express.png'
import flask from '../img/flask.png'
import mongo from '../img/mongo.png'
import sql from '../img/sql.svg'
import php from '../img/php.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'

export default function About() {
    return (
        <div className="about">
        <Container>
        <h1>About Me</h1>
        <p>My name is Jose Ramirez. I am a programmer who loves to code. I earned my Bachelor's Degree in Computer Science from the University of Maryland Global Campus, in the fall of 2019. 
            I grew a love for front-end development using JavaScript, HTML5, CSS3, ReactJS. I have experience creating REST APIs using Node.js, Express.js, and Flask, so I'm pretty familiar with back-end development as well.
            I created many projects in college using Java and created Python interfaces for the Library of Congress in Washington, DC.
        </p>
        <div className="social">
        <a href="https://www.linkedin.com/in/jose-a-ramirez/" target="__blank"><img src={linkedin} alt="linkedin"/></a>
        <a href="https://github.com/jramirez108" target="__blank"><img src={github} alt="github"/></a>
        </div>
        <h1 className="skills">Skills</h1>
        <Row>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={reactIcon} alt="reactlogo"/> <span>React.js</span>
            </ToastBody>
            </Toast>
            </Col>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={html5} alt="html5icon"/> <span>HTML5</span>
            </ToastBody>
            </Toast>
            </Col>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={css3} alt="css3icon"/> <span>CSS3</span>
            </ToastBody>
            </Toast>
            </Col>
        </Row>
        <Row>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={js} alt="jsicon"/> <span>JavaScript</span>
            </ToastBody>
            </Toast>
            </Col>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={python} alt="python"/> <span>Python</span>
            </ToastBody>
            </Toast>
            </Col>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={java} alt="javaicon"/> <span>Java</span>
            </ToastBody>
            </Toast>
            </Col>
        </Row>
        <Row>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={node} alt="nodejsicon"/> <span>Node.js</span>
            </ToastBody>
            </Toast>
            </Col>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={express} alt="express"/> <span>Express.js</span>
            </ToastBody>
            </Toast>
            </Col>
            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={flask} alt="flaskicon"/> <span>Flask</span>
            </ToastBody>
            </Toast>
            </Col>
        </Row>
        <Row>

            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={sql} alt="sqlicon"/> <span>SQL</span>
            </ToastBody>
            </Toast>
            </Col>

            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={mongo} alt="mongoicon"/> <span>MongoDB</span>
            </ToastBody>
            </Toast>
            </Col>

            <Col xs="12" sm="4">
            <Toast>
            <ToastBody>
            <img src={php} alt="phpicon"/> <span>PHP</span>
            </ToastBody>
            </Toast>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
