import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'components/Grid/Grid.js';
import { fetchPies } from 'actions/pies.js';

class GridContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchPies());
  }

  render() {
    const { pies } = this.props;
    return(
      <Grid items={pies.items} />
    );
  }
}

function mapStateToProps({ pies }) {
  return {
    pies
  }
}

export default connect(mapStateToProps)(GridContainer);
