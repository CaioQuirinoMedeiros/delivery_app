import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import createNavigator from './routes';

class App extends Component {
  state = {};

  static propTypes = {
    auth: PropTypes.shape({
      authChecked: PropTypes.bool,
      signedIn: PropTypes.bool,
    }).isRequired,
  };

  render() {
    const { auth } = this.props;

    if (!auth.authChecked) return <ActivityIndicator />;

    const Routes = createNavigator(auth.signedIn);
    return <Routes />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(App);