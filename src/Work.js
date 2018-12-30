import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Tile from './Tile.js'
import './css/work.css';
import nexchange from './Assets/nexchange_official_logo_white.png'
import intellisports from './Assets/intellisports_white.png'

class Work extends Component {
  render() {
    return (
    <div>
      <ScrollableAnchor id={'Work'}>
        <div className="Work">
          <Tile title="Lead Developer and Founder" description="some descrip" image={nexchange}></Tile> 
          <Tile title="Research Intern" description="some descrip" image={intellisports}></Tile>
        </div>
      </ScrollableAnchor>
    </div>
    );
  }
}

export default Work;
