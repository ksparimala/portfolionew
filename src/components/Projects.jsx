import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component{
    render(){
    return (
        <div class="projects">
            <h2>Practice Projects:-</h2>
            <ul>
                <li>Football Project : This project display the football game teams ,fixtures and game play.
                    Technologies: HTML, CSS, JAVA SCRIPT</li>
                    <a href="https://ksparimala.github.io/football1/index.html"> https://ksparimala.github.io/football1/index.html</a>
                <li>Yoga master project :This project includes yoga poses with description and videos
                Technologies: HTML, CSS, JAVA SCRIPT (Used local storage to store the login credentials)
                </li>
                <a href="https://ksparimala.github.io/yogamaster1/main.html">https://ksparimala.github.io/yogamaster1/main.html</a>
                <li>Fruitcatcher Project: This project accept two players to play the game and players can move their baskets using arrow keys and the game will be ended when the score reach to 10 . In this project used firebase console  to store the player data in database
                Technologies: HTML, CSS, JAVA SCRIPT</li>
                <a href="https://ksparimala.github.io/fruitcatcher/index.html">https://ksparimala.github.io/fruitcatcher/index.html</a>
            </ul>
        </div>
    )
}
}
export default Projects
