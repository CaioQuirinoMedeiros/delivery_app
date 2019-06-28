import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CategoriesActions from '../../store/ducks/categories';

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
  static navigationOptions = ({ navigation }) => ({
    header: <MainHeader navigation={navigation} />,
  });

  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    const { getCategoriesRequest } = this.props;

    getCategoriesRequest();
  };

  handleCategorySelect = (id) => {
    const { navigation } = this.props;

    navigation.navigate('Products', { categoryId: id });
  };

  renderCategory = ({ item }) => (
    <Category onPress={() => this.handleCategorySelect(item.id)}>
      <CategoryImage source={{ uri: item.image.url }} />
      <CategoryInfo>
        <CategoryTitle>{item.name}</CategoryTitle>
        <CategoryDescription>{item.description}</CategoryDescription>
        <CategoryCookTime>
          <Icon name="alarm" size={16} />
          <CategoryCookTimeText>{`${item.cook_time} mins`}</CategoryCookTimeText>
        </CategoryCookTime>
      </CategoryInfo>
    </Category>
  );

  render() {
    const { categories } = this.props;

    return (
      <Container>
        <CategoriesList
          data={categories.data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderCategory}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
