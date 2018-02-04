import React, { Component } from 'react';
import FeaturedCard from 'components/FeaturedCard/FeaturedCard.js';

class Grid extends Component {

  render() {
    const { items } = this.props;

    return(
      <div className="Grid">
        {
          items.map((item, index) => <FeaturedCard key={index} featured={item} />)
        }
      </div>
    );
  }
}

export default Grid;
