/* eslint-disable max-len */
import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ToastActionsCreators} from 'react-native-redux-toast';
import axios from 'axios';

import api from '../../services/api';

import CartTotal from '../../components/CartTotal';

import CartActions from '../../store/ducks/cart';

import {
  Container,
  Input,
  SendOrderButton,
  SendOrderButtonText,
  InputWrapper,
} from './styles';

function Order({navigation}) {
  const [observations, setObservations] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [number, setNumber] = useState('');

  const streetRef = useRef();
  const districtRef = useRef();
  const numberRef = useRef();

  const items = useSelector(({cart}) => cart.data);

  const dispatch = useDispatch();

  async function zipCodeLookup() {
    try {
      const {data} = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      );

      setDistrict(data.bairro);
      setStreet(data.logradouro);
    } catch (err) {
      dispatch(
        ToastActionsCreators.displayError(
          'CEP não encontrado, preencha os campos',
        ),
      );
    }
  }

  async function handleOrderSubmit() {
    try {
      const response = await api.post('orders', {
        observations,
        zip_code: zipCode,
        district,
        street,
        number,
        items: items.map(item => ({
          product_size_id: item.id,
          quantity: item.quantity,
        })),
      });

      dispatch(CartActions.clearItems());
      
      navigation.navigate('Profile');
      
      dispatch(ToastActionsCreators.displayInfo('Pedido enviado com sucesso!'));
    } catch (err) {
      dispatch(
        ToastActionsCreators.displayError('Preencha os campos corretamente'),
      );
    }
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholder="Alguma observação?"
          value={observations}
          onChangeText={text => setObservations(text)}
          returnKeyType="next"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="CEP"
          textContentType="postalCode"
          keyboardType="numeric"
          value={zipCode}
          maxLength={8}
          onChangeText={text => setZipCode(text)}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => streetRef.current.focus()}
          onEndEditing={zipCodeLookup}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="Rua"
          textContentType="streetAddressLine1"
          value={street}
          onChangeText={text => setStreet(text)}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => districtRef.current.focus()}
          ref={streetRef}
        />
        <Input
          placeholder="Nº"
          value={number}
          keyboardType="numeric"
          onChangeText={text => setNumber(text)}
          returnKeyType="next"
          ref={numberRef}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="Bairro"
          value={district}
          onChangeText={text => setDistrict(text)}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => numberRef.current.focus()}
          ref={districtRef}
        />
      </InputWrapper>

      <InputWrapper>
        <SendOrderButton onPress={handleOrderSubmit}>
          <SendOrderButtonText>FINALIZAR</SendOrderButtonText>
        </SendOrderButton>
      </InputWrapper>
    </Container>
  );
}

Order.navigationOptions = {
  title: 'Realizar pedido',
  headerRight: <CartTotal />,
};

export default Order;
