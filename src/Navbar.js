import React, { Component } from 'react';
import './css/navbar.css';

class Navbar extends Component {
  render() {
    return (
    <div>
        <div className="Navbar">
           <a className="navItem">ABOUT ME</a> 
           <a className="navItem">WORK</a>
           <a className="navItem">PROJECTS</a>
           <a className="navItem">RESUME</a>
           <a className="navItem">BLOG</a>
        </div>
    </div>
    );
  }
}

export default Navbar;
