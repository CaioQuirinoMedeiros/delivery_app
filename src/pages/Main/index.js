import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

  render() {
    const { navigation } = this.props;
    const { categories } = this.props;

    return (
      <>
        <View>
          <Text>MAAAAIN</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <Text>NAVEEEGAR para PRODUTOS!!!!</Text>
        </TouchableOpacity>
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
          renderItem={({ item }) => <Text>{item.name}</Text>}
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
