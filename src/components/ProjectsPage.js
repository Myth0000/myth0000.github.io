import React from "react";
import projectsJSON from "../projects.json";
import blankImage from "../images/Rectangle.png";
import image1 from "../images/block sprint thumbnail.png";
import image2 from "../images/The Forsaken Knight Thumbnail.png"

export default function ProjectsPage() {
    let projectsArray = [];

    projectsJSON.forEach(data => {
        projectsArray.push(<Project 
            Name={data.Name} 
            Image={data.Image} 
            key={data.Name}
            TutorialLink={data.TutorialLink ? data.TutorialLink : null}
            Link={data.Link ? data.Link : null}/>)
    })

    return (
        <div className="ProjectsPage">
            <p id="ProjectsText">PROJECTS</p>
            <p>These are some of the fun projects I have worked on during my free time.</p>

            <div className="ProjectsContainer">
                {projectsArray}
            </div>
        </div>
    );
}


function Project(props) {
    return (
        <a className="Project" target={"_blank"} href={props.TutorialLink ? props.TutorialLink : null}>
            <img src={props.Image ? props.Image : blankImage} draggable={false} />
            <p>{props.Name ? props.Name : "Project Name"}</p>
        </a>
    );
}