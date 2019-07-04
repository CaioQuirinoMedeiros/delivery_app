import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { REACT_APP_API_URL } from 'react-native-dotenv';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

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
    displayError: PropTypes.func.isRequired,
  };

  state = {
    categories: [],
    refreshing: false,
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = async () => {
    const { displayError } = this.props;
    try {
      this.setState({ refreshing: true });
      const response = await api.get('categories');

      this.setState({ categories: response.data });
    } catch (err) {
      console.log(err);
      displayError('Erro ao buscar categorias');
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
          uri: `${REACT_APP_API_URL}/uploads/${item.image ? item.image.path : 'no-image.jpg'}`,
        }}
      />
      <CategoryInfo>
        <CategoryInfoWrapper>
          <CategoryTitle>{item.name}</CategoryTitle>
          <CategoryDescription>{item.description}</CategoryDescription>
        </CategoryInfoWrapper>
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

const mapDispatchToProps = dispatch => bindActionCreators(ToastActionsCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
