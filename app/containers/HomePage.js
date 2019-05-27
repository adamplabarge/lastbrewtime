// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as CounterActions from '../actions/counter';

type Props = {
  incrementA: () => void,
  incrementB: () => void
};

class HomePage extends Component<Props> {
  props: Props;

  render() {
    const { incrementA, incrementB } = this.props;

    return <Home incrementA={incrementA} incrementB={incrementB} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
