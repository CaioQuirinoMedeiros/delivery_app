import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Button, Title } from './styles';

const MainHeader = ({ navigation, height }) => {
  console.log(navigation, height);
  return (
    <Container headerHeight={height}>
      <Button onPress={() => navigation.navigate('Profile')}>
        <Icon name="face" size={24} />
      </Button>
      <Title>Pizzaria Don Juan</Title>
      <Button onPress={() => navigation.navigate('Cart')} red>
        <Icon name="shopping-basket" size={24} />
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
