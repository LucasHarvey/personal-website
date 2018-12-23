import React, { Component } from 'react';
import './css/navbar.css';

class Navbar extends Component {
  render() {
    return (
    <div>
        <div className="Navbar">
           <div className="navItem"><a>ABOUT ME</a></div> 
           <div className="navItem"><a>WORK</a></div>
           <div className="navItem"><a>PROJECTS</a></div>
           <div className="navItem"><a>RESUME</a></div>
           <div className="navItem"><a>BLOG</a></div>
        </div>
    </div>
    );
  }
}

export default Navbar;
