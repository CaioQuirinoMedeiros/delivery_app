/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast'

import CartActions from '../../store/ducks/cart'
import { convertToBRL } from '../../services/currency'
import api from '../../services/api'

import {
  Container,
  SizesList,
  Size,
  SizeImage,
  SizeTitle,
  SizePrice
} from './styles'

function Sizes ({ navigation }) {
  const [sizes, setSizes] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const items = useSelector(({ cart }) => cart.data)

  const productId = navigation.getParam('productId')

  const dispatch = useDispatch()

  useEffect(() => {
    loadSizes()
  }, [])

  async function loadSizes () {
    try {
      setRefreshing(true)
      const { data } = await api.get('sizes', {
        params: { product: productId }
      })

      const sizes = data.map(item => ({
        ...item,
        price: convertToBRL(Number(item.price))
      }))

      setSizes(sizes)
    } catch (err) {
      dispatch(ToastActionsCreators.displayError('Erro ao buscar os tamanhos'))
    } finally {
      setRefreshing(false)
    }
  }

  async function handleSizeSelect (sizeId) {
    const itemInCart = items.find(item => item.id === sizeId)

    if (itemInCart) {
      dispatch(CartActions.increaseItemQuantity(itemInCart.id))
      navigation.navigate('Cart')
    } else {
      try {
        const { data } = await api.get(`sizes/${sizeId}`)

        dispatch(CartActions.addItem(data))

        navigation.navigate('Cart')
      } catch (err) {
        dispatch(ToastActionsCreators.displayError('Produto não encontrado'))
      }
    }
  }

  function renderSize ({ item }) {
    return (
      <Size onPress={() => handleSizeSelect(item.id)}>
        <SizeImage image={item.size.image} />
        <SizeTitle>{item.size.name}</SizeTitle>
        <SizePrice>{item.price}</SizePrice>
      </Size>
    )
  }

  return (
    <Container>
      <SizesList
        data={sizes}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={renderSize}
        onRefresh={loadSizes}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

Sizes.navigationOptions = {
  title: 'Selecione um tamanho'
}

export default Sizes
