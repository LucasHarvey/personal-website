import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/projects.css';

class Projects extends Component {
  render() {
    return (
    <div>
      <ScrollableAnchor id={'Projects'}>
        <div className="Projects">
        </div>
      </ScrollableAnchor>
    </div>
    );
  }
}

export default Projects;
