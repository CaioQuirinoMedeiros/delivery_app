import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActivityIndicator, StatusBar } from 'react-native';

import { Background } from './styles';

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
    return (
      <>
        <StatusBar backgroundColor="#0B2031" barStyle="light-content" />
        {auth.signedIn && <Background />}
        <Routes />
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(App);
