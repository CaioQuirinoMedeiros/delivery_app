/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { REACT_APP_API_URL } from 'react-native-dotenv';
import { ToastActionsCreators } from 'react-native-redux-toast';

import CartActions from '../../store/ducks/cart';
import { convertToBRL } from '../../services/currency';
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
    displayError: PropTypes.func.isRequired,
    displayInfo: PropTypes.func.isRequired,
    attItemQuantity: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  state = {
    sizes: [],
    refreshing: false,
  };

  componentDidMount() {
    this.loadSizes();
  }

  loadSizes = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('productId');

    try {
      this.setState({ refreshing: true });
      const response = await api.get('sizes', { params: { product: id } });

      const sizes = response.data.map(item => ({
        ...item,
        price: convertToBRL(Number(item.price)),
      }));

      this.setState({ sizes });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ refreshing: false });
    }
  };

  handleSizeSelect = async (id) => {
    const {
      navigation, addItem, attItemQuantity, items, displayError, displayInfo,
    } = this.props;

    const itemInCart = items.find(item => item.id === id);

    if (itemInCart) {
      attItemQuantity(id, itemInCart.quantity + 1);

      navigation.navigate('Cart');
      displayInfo('Mais uma unidade no carrinho!');
    } else {
      try {
        this.setState({ refreshing: true });
        const response = await api.get(`sizes/${id}`);

        addItem({ ...response.data, quantity: 1 });

        navigation.navigate('Cart');
        displayInfo('Item adicionado no carrinho!');
      } catch (err) {
        console.log(err);
        displayError('Produto não encontrado');
      } finally {
        this.setState({ refreshing: false });
      }
    }
  };

  renderSize = ({ item }) => (
    <Size onPress={() => this.handleSizeSelect(item.id)}>
      <SizeImage
        source={{
          uri: `${REACT_APP_API_URL}/uploads/${
            item.size.image ? item.size.image.path : 'no-image.jpg'
          }`,
        }}
      />
      <SizeTitle>{item.size.name}</SizeTitle>
      <SizePrice>{item.price}</SizePrice>
    </Size>
  );

  render() {
    const { sizes, refreshing } = this.state;
    return (
      <Container>
        <SizesList
          data={sizes}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderSize}
          onRefresh={this.loadSizes}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ToastActionsCreators, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sizes);
