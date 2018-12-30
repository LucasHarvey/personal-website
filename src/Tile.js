import React, { Component } from 'react';
import Tilt from 'react-tilt'
import './css/tile.css';

class Tile extends Component {
  render() {
    var {title, description, image} = this.props;
    return (
    <Tilt className="Tilt" options={{max:30, perspective: 400}}>
        <div className="Tile Tilt-inner">
            <img src={image}></img>
            <p className="title">{title}</p>
            <p className="description">{description}</p>

        </div>
    </Tilt>

);
  }
}

export default Tile;
