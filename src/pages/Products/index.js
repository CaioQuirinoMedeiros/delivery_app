import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity, FlatList,
} from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

class Products extends Component {
  static navigationOptions = {
    title: 'Selecione um tipo',
  };

  state = {
    products: [],
    id: null,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('categoryId');

    try {
      const response = await api.get('products', { params: { category: id } });

      this.setState({ products: response.data, id });
    } catch (err) {
      console.log(err);
    }
  };

  handleProductSelect = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Sizes', { productId: id });
  };

  renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => this.handleProductSelect(item.id)}>
      <Image source={{ uri: item.image.url }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    const { navigation } = this.props;
    const { id, products } = this.state;

    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Sizes')}>
          <Text>NAVEGAR PARA TIPOOOOOOOS</Text>
        </TouchableOpacity>

        <FlatList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </View>
    );
  }
}

export default Products;
