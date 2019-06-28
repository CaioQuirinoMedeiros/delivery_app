import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container, ProductsList, Product, ProductImage, ProductTitle,
} from './styles';

class Products extends Component {
  static navigationOptions = {
    title: 'Selecione um tipo',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('ProductId');

    try {
      const response = await api.get('products', { params: { Product: id } });

      this.setState({ products: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleProductSelect = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Sizes', { productId: id });
  };

  renderProduct = ({ item }) => (
    <Product onPress={() => this.handleProductSelect(item.id)}>
      <ProductImage source={{ uri: item.image.url }} />
      <ProductTitle>{item.name}</ProductTitle>
    </Product>
  );

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductsList
          data={products}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default Products;
