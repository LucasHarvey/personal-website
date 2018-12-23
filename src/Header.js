import React, { Component } from 'react';
import './css/header.css';

class Header extends Component {
  render() {
    return (
    <div>
        <div className="firstName">LUCAS</div>
        <div className="lastName">HARVEY</div>
        <div className="passions">Developer, Surfer & Entrepreneur</div>
        <div className="passions-background">D</div>
        <div className="Header"></div>
    </div>
    );
  }
}

export default Header;
