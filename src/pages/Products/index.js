import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

class Products extends Component {
  static navigationOptions = {
    title: 'Selecione um tipo',
  };

  componentDidMount() {}

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>PRODUCTS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sizes')}>
          <Text>NAVEGAR PARA TIPOOOOOOOS</Text>
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

export default Products;
