import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {REACT_APP_API_URL} from 'react-native-dotenv';
import {ToastActionsCreators} from 'react-native-redux-toast';

import api from '../../services/api';

import {
  Container,
  ProductsList,
  Product,
  ProductImage,
  ProductTitle,
} from './styles';

function Products({navigation}) {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const categoryId = navigation.getParam('categoryId');

  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setRefreshing(true);

      const {data} = await api.get('products', {
        params: {category: categoryId},
      });

      setProducts(data);
    } catch (err) {
      dispatch(ToastActionsCreators.displayError('Erro ao buscar categorias'));
    } finally {
      setRefreshing(false);
    }
  }

  function handleProductSelect (productId) {
    navigation.navigate('Sizes', {productId});
  };

  function renderProduct ({item}) {
    return (
    <Product onPress={() => handleProductSelect(item.id)}>
      <ProductImage
        source={{
          uri: `${REACT_APP_API_URL}/uploads/${
            item.image ? item.image.path : 'no-image.jpg'
          }`,
        }}
      />
      <ProductTitle>{item.name}</ProductTitle>
    </Product>
  );
      }

  return (
    <Container>
      <ProductsList
        data={products}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        onRefresh={loadProducts}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

Products.navigationOptions = {
  title: 'Selecione um tipo',
};

export default Products;
