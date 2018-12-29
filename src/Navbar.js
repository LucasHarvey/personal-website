import React, { Component } from 'react';
import './css/navbar.css';
import Resume from './LucasHarveyResume.pdf';

class Navbar extends Component {

  render() {
    return (
    <div>
        <div className="Navbar">
           <a href="#Me"className="navItem">ABOUT ME</a> 
           <a href="#Work" className="navItem">WORK</a>
           <a href="#Projects" className="navItem">PROJECTS</a>
           <a className="navItem" target="_blank" href={Resume}>RESUME</a>
           <a className="navItem">BLOG</a>
        </div>
    </div>
    );
  }
}

export default Navbar;
