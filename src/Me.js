import React, { Component } from 'react';
import './css/me.css';
import me from './Assets/me2.png'

class Me extends Component {
  render() {
    return (
    <div>
      <div className="Me">
        <div className="about-me">
          <img src={me}></img>
          <div className="content">
            <h1>Hey there!</h1>
            <p>I'm a Software Engineering student at the University of Waterloo who is passionate about programming, sports and entrepreneurship.</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Me;
