import React, { useEffect, useState } from 'react'
import { Container, Tooltip } from 'reactstrap';
import '../css/projects.css';
import Project from './Project';
import landingPage from '../img/land.PNG'
import calc from '../img/calc.PNG'
import reactIcon from '../img/react.png'
import html5 from '../img/html5.png'
import css3 from '../img/css3.svg'
import js from '../img/js.png'
import python from '../img/python.png'
import firebase from '../img/firebase.png'
import empList from '../img/empList.PNG'
import chatapp from '../img/chatapp.gif'
import asbservices from '../img/asbservices.PNG'
import vkb from '../img/virtualKeyboard.PNG'
import currency from '../img/currency.PNG'
import sql from '../img/sql.svg'
import companydb from '../img/CompanyDB.PNG'
import pong from '../img/pong.PNG'
import champions from '../img/champions.PNG'
import csharp from '../img/c-sharp.png'
import typescript from '../img/typescript.png'
import propfinder from '../img/propfinder.png'


export default function Projects() {

    useEffect(() => {

        var scrollToTopBtn = document.querySelector(".back2top")
        var rootElement = document.documentElement

        function handleScroll() {
            // do something on scroll
            var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
            if ((rootElement.scrollTop / scrollTotal) > 0.10) {
                //show button
                scrollToTopBtn.style.display = "block"
            } else {
                //hide button
                scrollToTopBtn.style.display = "none"
            }
        }

        function scrollToTop() {
            //scroll to top logic
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        scrollToTopBtn.addEventListener("click", scrollToTop)
        document.addEventListener("scroll", handleScroll)
    }, [])
    const projects = [
        {
            name: 'PropFinder.app',
            lang: [reactIcon, csharp, typescript],
            buttonName: 'Visit',
            buttonLink: 'https://propfinder.app/',
            img: propfinder,
            description: "Web tool that allows users to research NBA, MLB player props quickly. Used by 2000+ users daily. Uses live odd data as well as players stats that are refreshed every few hours. Hosted on a Linux DigitalOcean droplet."
        },
        {
            name: 'Champions League App',
            lang: [html5, css3, js, reactIcon],
            buttonName: 'Visit',
            buttonLink: 'https://champions-league-app-8b7fb791f196.herokuapp.com/',
            img: champions,
            description: ""
        },
        {
            name: 'Asbservices.net',
            lang: [html5, css3, js],
            buttonName: 'Visit',
            buttonLink: 'https://asbservices.net/',
            img: asbservices,
            description: ""
        },
        {
            name: 'Landing Page',
            lang: [html5, css3, js],
            buttonName: 'Visit',
            buttonLink: 'https://portfolio.asbservices.net/One/index.html',
            img: landingPage,
            description: ""
        },
        {
            name: 'React Chat Application',
            lang: [html5, css3, js, reactIcon],
            buttonName: 'Source',
            buttonLink: 'https://github.com/jramirez108/react-chat',
            img: chatapp,
            description: ""
        },
        {
            name: 'Employee Database',
            lang: [html5, css3, js, firebase],
            buttonName: 'Visit',
            buttonLink: 'https://employeelist-3ae20.web.app/',
            img: empList,
            description: ""
        },
        {
            name: 'Employee Database (Python)',
            lang: [python, sql],
            buttonName: 'Source',
            buttonLink: 'https://github.com/jramirez108/Company-Database',
            img: companydb,
            description: ""
        },
        {
            name: 'Currency App',
            lang: [html5, css3, js, reactIcon],
            buttonName: 'Visit',
            buttonLink: 'https://react-currencies.web.app/',
            img: currency,
            description: ""
        },
        {
            name: 'Pong Game',
            lang: [python],
            buttonName: 'Source',
            buttonLink: 'https://github.com/jramirez108/python-pong/blob/master/pong.py',
            img: pong,
            description: ""
        },
        {
            name: 'Virtual Keyboard',
            lang: [html5, css3, js],
            buttonName: 'Visit',
            buttonLink: 'https://virtualkeyboard-7a612.web.app/',
            img: vkb,
            description: ""
        },
        {
            name: 'Calculator',
            lang: [html5, css3, js],
            buttonName: 'Visit',
            buttonLink: 'https://portfolio.asbservices.net/calc.html',
            img: calc,
            description: ""
        }
    ]
    const projectItems = projects.map(item => <Project img={item.img} title={item.name} buttonName={item.buttonName} link={item.buttonLink} lang={item.lang} description={item.description} />)
    const [tooltipOpen, settooltipOpen] = useState(false);
    const toggle = () => settooltipOpen(!tooltipOpen)

    return (
        <div className="project-container">
            <a className="back2top">&#10148;</a>
            <Container fluid>
                {projectItems}
            </Container>
        </div>
    )
}
