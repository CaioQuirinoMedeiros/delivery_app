import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import axios from 'axios';
// import { Container } from './styles';

class Order extends Component {
  static navigationOptions = {
    title: 'Realizar pedido',
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

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      notes, cep, street, district, number,
    } = this.state;
    return (
      <View>
        <TextInput
          multiline
          placeholder="Alguma observação?"
          value={notes}
          onChangeText={text => this.setState({ notes: text })}
          returnKeyType="next"
          onSubmitEditing={() => this.zipCode.focus()}
        />
        <TextInput
          placeholder="Qual seu CEP?"
          textContentType="postalCode"
          keyboardType="numeric"
          value={cep}
          onChangeText={text => this.setState({ cep: text })}
          returnKeyType="next"
          onSubmitEditing={() => {
            this.cepLookup();
            this.street.focus();
          }}
          ref={(el) => {
            this.zipCode = el;
          }}
        />
        <TextInput
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
        <TextInput
          placeholder="Bairro"
          value={district}
          onChangeText={text => this.setState({ district: text })}
          returnKeyType="next"
          onSubmitEditing={() => this.number.focus()}
          ref={(el) => {
            this.district = el;
          }}
        />
        <TextInput
          multiline
          placeholder="Nº"
          value={number}
          onChangeText={text => this.setState({ number: text })}
          returnKeyType="next"
          ref={(el) => {
            this.number = el;
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  null,
)(Order);
