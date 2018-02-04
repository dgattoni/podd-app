import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'components/Grid/Grid.js';
import { fetchFeaturedPies } from 'actions/featuredPies.js';

class GridContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchFeaturedPies());
  }

  render() {
    const { featuredPies } = this.props;
    return(
      <Grid items={featuredPies.items} />
    );
  }
}

function mapStateToProps({ featuredPies }) {
  return {
    featuredPies
  }
}

export default connect(mapStateToProps)(GridContainer);
