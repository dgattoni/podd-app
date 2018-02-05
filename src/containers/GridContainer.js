import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from 'components/Grid/Grid.js';
import Paginator from 'components/Paginator/Paginator.js';
import TogglePrice from 'components/TogglePrice/TogglePrice.js';

import {
  fetchFeaturedPies,
  incrementPage,
  decrementPage,
  toggleSort,
} from 'actions/featuredPies.js';

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.onNextButtonClick = this.onNextButtonClick.bind(this);
    this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
    this.onToggleSort = this.onToggleSort.bind(this);
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

  onToggleSort() {
    const { toggleSort } = this.props;
    toggleSort();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.featuredPies.items.length > 0;
  }

  componentDidMount() {
    this.props.fetchFeaturedPies();
  }

  render() {
    const { featuredPies: { items, ascendingSort } } = this.props;
    return(
      <Fragment>
        <TogglePrice
          onToggleSort={this.onToggleSort}
          isAccendingSort={ascendingSort}
        />
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
    toggleSort
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
