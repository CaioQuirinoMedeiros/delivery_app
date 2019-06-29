import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  CategoriesList,
  Category,
  CategoryImage,
  CategoryInfo,
  CategoryTitle,
  CategoryDescription,
  CategoryCookTime,
  CategoryCookTimeText,
} from './styles';

import MainHeader from '../../components/MainHeader';

class Main extends Component {
  static navigationOptions = {
    header: ({ navigation, defaultNavigationOptions }) => (
      <MainHeader navigation={navigation} height={defaultNavigationOptions.headerStyle.height} />
    ),
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    categories: [],
    refreshing: false,
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = async () => {
    try {
      this.setState({ refreshing: true });
      const response = await api.get('categories');

      this.setState({ categories: response.data });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ refreshing: false });
    }
  };

  handleCategorySelect = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Products', { categoryId: id });
  };

  renderCategory = ({ item }) => (
    <Category onPress={() => this.handleCategorySelect(item.id)}>
      <CategoryImage
        source={{
          uri:
            'http://www.ocladapizza.com.br/wp-content/uploads/2017/02/massa-da-pizza-conhe%C3%A7a-6-ingredientes-e-suas-fun%C3%A7%C3%B5es-blog-pizzaria-o-cla-da-pizza-660x420.jpg',
        }}
      />
      <CategoryInfo>
        <CategoryTitle>{item.name}</CategoryTitle>
        <CategoryDescription>{item.description}</CategoryDescription>
        <CategoryCookTime>
          <Icon name="alarm" size={16} color="#ccc" />
          <CategoryCookTimeText>{`${item.cook_time} mins`}</CategoryCookTimeText>
        </CategoryCookTime>
      </CategoryInfo>
    </Category>
  );

  render() {
    const { categories, refreshing } = this.state;

    return (
      <Container>
        <CategoriesList
          data={categories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderCategory}
          onRefresh={this.loadCategories}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

export default Main;
