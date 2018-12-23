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
                <span> iOS development </span>and<span> React </span>. I am now looking for internship opportunities starting in April 2019.
              </p>
            </div>
            </div>
          </div>
          <div>
            <h2>My Skills</h2>
            <h3>Programming languages:</h3>
            <p>Swift, Objective-C, JavaScript, HTML, CSS, PHP, MySQL, Shell, Python, R, C</p>
            <h3>Tools and Frameworks:</h3>
            <p>XCode, React, Apache, R Studio, Git</p>
            <h2>Cool facts</h2>
            <ul>
              <li>I'm from Montreal and am fluent in both French and English</li>
              <li>I love running and completed a half-marathon</li>
              <li>I've surfed in Thailand, South Africa and Peru</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Me;
