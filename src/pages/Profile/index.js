import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

import AuthActions from '../../store/ducks/auth';

class Profile extends Component {
  static navigationOptions = {
    title: 'Meus pedidos',
  };

  componentDidMount() {}

  signOut = () => {
    const { signOut } = this.props;

    signOut();
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text>NAVEGAR PARA MENU</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text>NAVEEEGAR para CARRINHO!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signOut}>
          <Text>LOOOOGGGGOOOOUUUUTTTTT!!!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Profile);
