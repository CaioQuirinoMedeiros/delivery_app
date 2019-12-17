import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'

const BackButton = ({ tintColor, onPress }) => (
  <Icon
    name='chevron-left'
    size={24}
    color={tintColor}
    onPress={() => onPress()}
    style={{ paddingLeft: 10 }}
    hitSlop={{
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    }}
  />
)

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  tintColor: PropTypes.string
}

BackButton.defaultProps = {
  tintColor: '#fff'
}

export default BackButton
