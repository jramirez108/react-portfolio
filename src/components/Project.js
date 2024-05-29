import React from 'react'
import '../css/projects.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project(props) {
    AOS.init();

    const languages = props.lang.map(lang => <img key={lang} src={lang} alt={lang} style={{ height: "60px", marginRight: "10px", marginLeft: "10px" }} />)
    var items = ['fade-up', 'flip-left', 'flip-up', 'fade-up-right', 'zoom-in-down', 'zoom-in-up']
    var item = items[Math.floor(Math.random() * items.length)]
    return (
        <div key={props.name} className="project-item" data-aos={item} data-aos-duration="2000">
            <img className="big" src={props.img} alt={props.img} />
            <div className="project-content">
                <h1>{props.title}</h1>
                <p>{languages}</p>
                <p className="description">{props.description}</p>
                <a href={props.link} target="__blank" className="hvr-rectangle-out">{props.buttonName}</a>
            </div>
        </div>
    )
}
