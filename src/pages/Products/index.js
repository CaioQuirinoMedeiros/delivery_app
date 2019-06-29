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
    refreshing: false,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('categoryId');

    try {
      this.setState({ refreshing: true });
      const response = await api.get('products', { params: { category: id } });

      this.setState({ products: response.data });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ refreshing: false });
    }
  };

  handleProductSelect = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Sizes', { productId: id });
  };

  renderProduct = ({ item }) => (
    <Product onPress={() => this.handleProductSelect(item.id)}>
      <ProductImage
        source={{ uri: 'https://optepizza.com.br/wp-content/uploads/opte-pizza.png' }}
      />
      <ProductTitle>{item.name}</ProductTitle>
    </Product>
  );

  render() {
    const { products, refreshing } = this.state;

    return (
      <Container>
        <ProductsList
          data={products}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
          onRefresh={this.loadProducts}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

export default Products;
