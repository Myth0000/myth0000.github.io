import React from "react";
import projectsJSON from "../projects.json";
import blankImage from "../images/Rectangle.png";
import image1 from "../images/block sprint thumbnail.png";
import image2 from "../images/The Forsaken Knight Thumbnail.png"

export default function ProjectsPage() {
    let projectsArray = [];
    let tutorialProjectsArray = [];

    projectsJSON.forEach(data => {
        if(data.Type == "Tutorial") {
            tutorialProjectsArray.push(<Project 
                Name={data.Name} 
                Image={data.Image} 
                key={data.Name}
                Link={data.TutorialLink ? data.TutorialLink : null} />)
        }
        else {
            projectsArray.push(<Project 
                Name={data.Name} 
                Image={data.Image} 
                key={data.Name}
                Link={data.Link ? data.Link : null}/>)
        }
    })

    if(projectsArray.length == 0) projectsArray.push(<Project key="NONE" />)
    if(tutorialProjectsArray.length == 0) tutorialProjectsArray.push(<Project key="NONE" />)

    return (
        <div className="ProjectsPage">
            <p id="ProjectsText">PROJECTS</p>
            <p>These are some of the fun projects I have worked on during my free time.</p>

            <div className="ProjectsContainer">
                {projectsArray}
            </div>

            <p id="TutorialProjectsText">These are the projects I made using an online tutorial, mostly for learning purposes.</p>
            <div className="ProjectsContainer">
                {tutorialProjectsArray}
            </div>
        </div>
    );
}


function Project(props) {
    return (
        <a className="Project" target={"_blank"} href={props.Link ? props.Link : null}>
            <img src={props.Image ? props.Image : blankImage} draggable={false} />
            <p>{props.Name ? props.Name : "Project Name"}</p>
        </a>
    );
}