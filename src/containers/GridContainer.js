import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from 'components/Grid/Grid.js';
import Paginator from 'components/Paginator/Paginator.js';

import {
  fetchFeaturedPies,
  incrementPage,
  decrementPage,
  sortPrice } from 'actions/featuredPies.js';

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.onNextButtonClick = this.onNextButtonClick.bind(this);
    this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
    this.onSortButtonClick = this.onSortButtonClick.bind(this);
  }

  onNextButtonClick() {
    const { incrementPage, fetchFeaturedPies } = this.props;
    incrementPage();
    fetchFeaturedPies();
  }

  onPrevButtonClick() {
    const { decrementPage, fetchFeaturedPies } = this.props;
    decrementPage();
    fetchFeaturedPies();
  }

  onSortButtonClick(defaultSort) {
    const { sortPrice } = this.props;
    sortPrice(defaultSort);
  }

  componentDidMount() {
    this.props.fetchFeaturedPies();
  }

  render() {
    const { featuredPies: { items, isFetching, defaultSort } } = this.props;
    return(
      <Fragment>
        <p>Default Sort: {defaultSort}</p>
        <button onClick={() => this.onSortButtonClick('asc')}>PRICE ASC</button>
        <button onClick={() => this.onSortButtonClick('desc')}>PRICE DESC</button>
        <Grid items={items} />
        <Paginator
          onPrevButtonClick={this.onPrevButtonClick}
          onNextButtonClick={this.onNextButtonClick}
        />
      </Fragment>
    );
  }
}

function mapStateToProps({ featuredPies }) {
  return {
    featuredPies
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFeaturedPies,
    incrementPage,
    decrementPage,
    sortPrice
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
