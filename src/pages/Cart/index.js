import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>CARRRIIIIINHHOOOOO</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OrderStack')}>
          <Text>MENU</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Cart;
