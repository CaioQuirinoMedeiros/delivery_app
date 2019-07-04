import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import api from '../../services/api';

import CartTotal from '../../components/CartTotal';

import CartActions from '../../store/ducks/cart';

import {
  Container, Input, SendOrderButton, SendOrderButtonText, InputWrapper,
} from './styles';

class Order extends Component {
  static navigationOptions = {
    title: 'Realizar pedido',
    headerRight: <CartTotal />,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
      }),
    ).isRequired,
    removeItem: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    notes: '',
    cep: '',
    street: '',
    district: '',
    number: '',
  };

  componentDidMount() {}

  cepLookup = async () => {
    const { cep } = this.state;

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      this.setState({ district: data.bairro, street: data.logradouro });
    } catch (err) {
      console.log(err);
    }
  };

  handleOrderSubmit = async () => {
    const {
      notes, cep, street, district, number,
    } = this.state;
    const { navigation, items, removeItem } = this.props;

    try {
      await api.post('orders', {
        observations: notes,
        zip_code: cep,
        district,
        street,
        number,
        items: items.map(item => ({ product_size_id: item.id, quantity: item.quantity })),
      });

      this.setState({
        notes: '',
        cep: '',
        street: '',
        number: '',
        district: '',
      });

      items.forEach(item => removeItem(item.id));

      navigation.navigate('Profile');
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      notes, cep, street, district, number,
    } = this.state;
    return (
      <Container>
        <InputWrapper>
          <Input
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            placeholder="Alguma observação?"
            value={notes}
            onChangeText={text => this.setState({ notes: text })}
            returnKeyType="next"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Qual seu CEP?"
            textContentType="postalCode"
            keyboardType="numeric"
            value={cep}
            onChangeText={text => this.setState({ cep: text })}
            returnKeyType="next"
            onSubmitEditing={() => this.street.focus()}
            onEndEditing={() => this.cepLookup()}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Rua"
            textContentType="streetAddressLine1"
            value={street}
            onChangeText={text => this.setState({ street: text })}
            returnKeyType="next"
            onSubmitEditing={() => this.district.focus()}
            ref={(el) => {
              this.street = el;
            }}
          />
          <Input
            placeholder="Nº"
            value={number}
            keyboardType="numeric"
            onChangeText={text => this.setState({ number: text })}
            returnKeyType="next"
            ref={(el) => {
              this.number = el;
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Bairro"
            value={district}
            onChangeText={text => this.setState({ district: text })}
            returnKeyType="next"
            onSubmitEditing={() => this.number.focus()}
            ref={(el) => {
              this.district = el;
            }}
          />
        </InputWrapper>

        <InputWrapper>
          <SendOrderButton onPress={this.handleOrderSubmit}>
            <SendOrderButtonText>FINALIZAR</SendOrderButtonText>
          </SendOrderButton>
        </InputWrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
