import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { convertToBRL } from '../../services/currency';

const CartTotal = ({ total }) => <Text style={{ paddingHorizontal: 20 }}>{total}</Text>;

CartTotal.propTypes = {
  total: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  total: convertToBRL(
    state.cart.data.reduce((total, item) => total + item.price * item.quantity, 0),
  ),
});

export default connect(
  mapStateToProps,
  null,
)(CartTotal);
