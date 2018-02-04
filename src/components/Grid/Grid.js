import React, { Component } from 'react';
import Card from 'components/Card/Card.js';

class Grid extends Component {

  render() {
    const { items } = this.props;

    return(
      <div className="Grid">
        {
          items.map((item, index) => <Card key={index} {...item} />)
        }
      </div>
    );
  }
}

export default Grid;
