import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

class Profile extends Component {
  static navigationOptions = {
    title: 'Meus pedidos',
  };

  componentDidMount() {}

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
        <TouchableOpacity onPress={() => console.log(navigation)}>
          <Text>NAVIGATION!!!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
