import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

class Work extends Component {
  render() {
    return (
    <div>
      <ScrollableAnchor id={'Work'}>
        <div className="Work">
          <p>In Progress...</p>
        </div>
      </ScrollableAnchor>
    </div>
    );
  }
}

export default Work;
