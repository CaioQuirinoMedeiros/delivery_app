import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Pizzaria Don Juan',
  };

  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    return (
      <>
        <View onClick={() => navigation.navigate('Products')}>
          <Text>MAAAAIN</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Text>NAVEEEGAR para PRODUTOS!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text>NAVEEEGAR para CARRINHO!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>NAVEEEGAR para PERFIL!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log(navigation)}>
          <Text>NAVIGATION!!!!</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Main;
