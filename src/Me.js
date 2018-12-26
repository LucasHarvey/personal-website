import React, { Component } from 'react';
import './css/me.css';
import me from './Assets/full-me.png'

class Me extends Component {
  render() {
    return (
    <div>
      <div className="Me">
        <div className="hello">
          <div>
            <img src={me}></img>
          </div>
          <div className="greeting">
            <h1>Hey there!</h1>
            <p>
              I'm a Software Engineering student at the University of Waterloo and am passionate about programming, 
              sports and entrepreneurship. I am currently developing my mobile and web development skills by learning<nobr> 
              <span> iOS development </span></nobr><nobr>and<span> React </span>.</nobr> I am now looking for internship opportunities starting in <nobr>April 2019.</nobr>
            </p>
          </div>
        </div>
        <div className="info">
          <div className="skills">
            <h2>My Skills</h2>
            <div className="skillsContent"> 
              <div className="skillSection leftList">
                <h3><nobr>Programming languages</nobr></h3>
                <div className="lists">
                  <ul>
                    <li>Swift</li>
                    <li><nobr>Objective-C</nobr></li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>Shell</li>
                    <li>R</li>
                    <li>C</li>
                  </ul>
                </div> 
              </div>
              <div className="skillSection">
                <h3><nobr>Tools and Frameworks</nobr></h3>
                <ul>
                  <li>XCode</li>
                  <li>React</li>
                  <li>Apache</li>
                  <li>R Studio</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="facts">
            <h2>Cool facts</h2>
            <ul>
              <li>I'm from Montreal and am fluent in both French <nobr>and English</nobr></li>
              <li>I jumped off the world's highest commercial bridge for bungee jumping <nobr>(Bloukrans, South Africa)</nobr></li>
              <li>I love running and completed <nobr>a half-marathon</nobr></li>
              <li>I've surfed in Thailand, South Africa < nobr>and Peru</nobr></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Me;
