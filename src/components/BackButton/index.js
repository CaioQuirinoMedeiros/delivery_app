import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
// import { Container } from './styles';

const BackButton = ({ tintColor, onPress }) => (
  <Icon
    name="chevron-left"
    size={24}
    color={tintColor}
    onPress={() => onPress()}
    style={{ paddingLeft: 10 }}
  />
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  tintColor: PropTypes.string,
};

BackButton.defaultProps = {
  tintColor: '#fff',
};

export default BackButton;
