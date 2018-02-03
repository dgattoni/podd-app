import React, { Component } from 'react';
import Card from '../Card/Card.js';

class Grid extends Component {

  render() {
    const { podds } = this.props;

    return(
      <div className="Grid">
        {
          podds.map((item, index) => <Card key={index} {...item} />)
        }
      </div>
    );
  }
}

export default Grid;
