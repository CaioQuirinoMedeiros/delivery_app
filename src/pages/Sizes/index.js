import React, { Component } from 'react';

import {
  View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

class Sizes extends Component {
  static navigationOptions = {
    title: 'Selecione um tamanho',
  };

  state = {
    sizes: [],
  };

  componentDidMount() {
    this.loadSizes();
  }

  loadSizes = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('productId');

    try {
      const response = await api.get(`products/${id}`);

      this.setState({ sizes: response.data.sizes });
    } catch (err) {
      console.log(err);
    }
  };

  renderSize = ({ item }) => (
    <TouchableOpacity onPress={() => this.handleSizeSelect(item.id)}>
      <Text>{item.size.name}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  render() {
    const { sizes } = this.state;
    return (
      <View>
        <FlatList
          data={sizes}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderSize}
        />
      </View>
    );
  }
}

export default Sizes;
