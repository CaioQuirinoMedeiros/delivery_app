import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { REACT_APP_API_URL } from 'react-native-dotenv';
import CategoriesActions from '../../store/ducks/categories';

// import { Container } from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Pizzaria Don Juan',
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
    <TouchableOpacity onPress={() => this.handleCategorySelect(item.id)}>
      <Image source={{ uri: item.image.url }} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.cook_time}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { navigation } = this.props;
    const { categories } = this.props;

    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text>NAVEEEGAR para CARRINHO!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>NAVEEEGAR para PERFIL!!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.loadCategories();
            console.log(categories);
          }}
        >
          <Text>CARREGAR CATEGOOOOOORIAS!!!!</Text>
        </TouchableOpacity>

        <FlatList
          data={categories.data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderCategory}
        />
      </>
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
