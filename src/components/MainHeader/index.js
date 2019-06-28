import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

const MainHeader = ({ navigation }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text>Perfil</Text>
    </TouchableOpacity>
    <Text>Pizzaria Don Juan</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Text>Carinho</Text>
    </TouchableOpacity>
  </View>
);

MainHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default MainHeader;
