import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Button, Title, CartItems } from './styles'

const MainHeader = ({ navigation, height, itemsLength }) => (
  <Container headerHeight={height}>
    <Button onPress={() => navigation.navigate('Profile')}>
      <Icon name='face' size={24} color='#fff' />
    </Button>
    <Title>Pizzaria Don Juan</Title>
    <Button onPress={() => navigation.navigate('Cart')} red>
      {itemsLength > 0 ? <CartItems>{itemsLength}</CartItems> : <></>}
      <Icon name='shopping-basket' size={20} color='#fff' />
    </Button>
  </Container>
)

MainHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  height: PropTypes.number,
  itemsLength: PropTypes.number.isRequired
}

MainHeader.defaultProps = {
  height: 60
}

const mapStateToProps = state => ({
  itemsLength: state.cart.data.length
})

export default connect(mapStateToProps, null)(MainHeader)
