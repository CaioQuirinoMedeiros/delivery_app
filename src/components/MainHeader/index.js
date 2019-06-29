import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Button, Title, CartItems,
} from './styles';

const MainHeader = ({ navigation, height }) => {
  console.log(navigation, height);
  return (
    <Container headerHeight={height}>
      <Button onPress={() => navigation.navigate('Profile')}>
        <Icon name="face" size={24} color="#fff" />
      </Button>
      <Title>Pizzaria Don Juan</Title>
      <Button onPress={() => navigation.navigate('Cart')} red>
        <CartItems>5</CartItems>
        <Icon name="shopping-basket" size={20} color="#fff" />
      </Button>
    </Container>
  );
};

MainHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  height: PropTypes.number,
};

MainHeader.defaultProps = {
  height: 60,
};

export default MainHeader;
