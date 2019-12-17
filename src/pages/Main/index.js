import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ToastActionsCreators } from 'react-native-redux-toast'

import api from '../../services/api'

import {
  Container,
  CategoriesList,
  Category,
  CategoryImage,
  CategoryInfo,
  CategoryInfoWrapper,
  CategoryTitle,
  CategoryDescription,
  CategoryCookTime,
  CategoryCookTimeText
} from './styles'

import MainHeader from '../../components/MainHeader'

function Main ({ navigation }) {
  const [categories, setCategories] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories () {
    try {
      setRefreshing(true)

      const response = await api.get('categories')

      setCategories(response.data)
    } catch (err) {
      dispatch(ToastActionsCreators.displayError('Erro ao buscar categorias'))
    } finally {
      setRefreshing(false)
    }
  }

  function handleCategorySelect (categoryId) {
    navigation.navigate('Products', { categoryId })
  }

  function renderCategory ({ item }) {
    return (
      <Category onPress={() => handleCategorySelect(item.id)}>
        <CategoryImage image={item.image} />
        <CategoryInfo>
          <CategoryInfoWrapper>
            <CategoryTitle>{item.name}</CategoryTitle>
            <CategoryDescription>{item.description}</CategoryDescription>
          </CategoryInfoWrapper>
          <CategoryCookTime>
            <Icon name='alarm' size={16} color='#ccc' />
            <CategoryCookTimeText>{`${item.cook_time} mins`}</CategoryCookTimeText>
          </CategoryCookTime>
        </CategoryInfo>
      </Category>
    )
  }

  return (
    <Container>
      <CategoriesList
        data={categories}
        keyExtractor={item => String(item.id)}
        renderItem={renderCategory}
        onRefresh={loadCategories}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

Main.navigationOptions = {
  header: ({ navigation, defaultNavigationOptions }) => (
    <MainHeader
      navigation={navigation}
      height={defaultNavigationOptions.headerStyle.height}
    />
  )
}

export default Main
