import React, { Component } from 'react';
import './css/me.css';
import me from './Assets/full-me.png'

class Me extends Component {
  render() {
    return (
    <div>
      <div className="Me">
        <div className="about-me">
        <div className="hello">
            <img src={me}></img>
            <div className="content">
              <div>
                <h1>Hey there!</h1>
                <p>
                  I'm a Software Engineering student at the University of Waterloo and am passionate about programming, 
                  sports and entrepreneurship. I am currently developing my mobile and web development skills by learning 
                  <span> iOS development </span><nobr>and<span> React </span>.</nobr> I am now looking for internship opportunities starting in <nobr>April 2019.</nobr>
                </p>
              </div>
              <h2>My Skills</h2>
              <h3>Programming languages:</h3>
              <div className="lists">
                <ul>
                  <li>Swift</li>
                  <li>Objective-C</li>
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
              <h3>Tools and Frameworks:</h3>
              <ul>
                <li>XCode</li>
                <li>React</li>
                <li>Apache</li>
                <li>R Studio</li>
                <li>Git</li>
              </ul>
              <h2>Cool facts</h2>
              <ul>
                <li>I'm from Montreal and am fluent in both French <nobr>and English</nobr></li>
                <li>I love running and completed <nobr>a half-marathon</nobr></li>
                <li>I've surfed in Thailand, South Africa < nobr>and Peru</nobr></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Me;
