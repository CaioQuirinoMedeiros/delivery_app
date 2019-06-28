import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CartActions from '../../store/ducks/cart';

import api from '../../services/api';

import {
  Container, SizesList, Size, SizeImage, SizeTitle, SizePrice,
} from './styles';

class Sizes extends Component {
  static navigationOptions = {
    title: 'Selecione um tamanho',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
    addItem: PropTypes.func.isRequired,
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
      const response = await api.get('sizes', { params: { product: id } });

      this.setState({ sizes: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleSizeSelect = async (id) => {
    const { navigation, addItem } = this.props;

    try {
      const response = await api.get(`sizes/${id}`);

      console.log(response);

      addItem({ ...response.data, quantity: 1 });

      navigation.navigate('Cart');
    } catch (err) {
      console.log(err);
    }
  };

  renderSize = ({ item }) => (
    <Size onPress={() => this.handleSizeSelect(item.id)}>
      <SizeImage
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/snibrazil/wp-content/uploads/2017/09/1506701024-massa-de-pizza_616x462.jpg',
        }}
      />
      <SizeTitle>{item.size.name}</SizeTitle>
      <SizePrice>{item.price}</SizePrice>
    </Size>
  );

  render() {
    const { sizes } = this.state;
    return (
      <Container>
        <SizesList
          data={sizes}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderSize}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Sizes);
