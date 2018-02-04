import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from 'components/Grid/Grid.js';
import Paginator from 'components/Paginator/Paginator.js';

import {
  fetchFeaturedPies,
  incrementPage,
  decrementPage } from 'actions/featuredPies.js';

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.onNextButtonClick = this.onNextButtonClick.bind(this);
    this.onPrevButtonClick = this.onPrevButtonClick.bind(this);
  }

  onNextButtonClick() {
    console.log('onNextButtonClick');
    const { incrementPage, fetchFeaturedPies } = this.props;
    incrementPage();
    fetchFeaturedPies();
  }

  onPrevButtonClick() {
    console.log('onPrevButtonClick');
    const { decrementPage, fetchFeaturedPies } = this.props;
    decrementPage();
    fetchFeaturedPies();
  }

  componentDidMount() {
    this.props.fetchFeaturedPies();
  }

  render() {
    const { featuredPies } = this.props;
    return(
      <Fragment>
        <Grid items={featuredPies.items} />
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
    decrementPage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
