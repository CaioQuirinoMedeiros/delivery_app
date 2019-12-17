import React from 'react'

import { View, Text } from 'react-native'

// import { Container } from './styles';

const LoadingIndicator = () => (
  <View>
    <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
      Carregando...
    </Text>
  </View>
)

export default LoadingIndicator
