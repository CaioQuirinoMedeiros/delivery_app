import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';
import { convertToBRL } from '../../services/currency';

import {
  Container,
  OrdersList,
  OrderItem,
  OrderInfo,
  OrderNumber,
  OrderElapsedTime,
  OrderTotal,
  OrderStatus,
  Footer,
  LogoutButton,
  LogoutButtonText,
  EmptyMessage,
} from './styles';

import AuthActions from '../../store/ducks/auth';

class Profile extends Component {
  static navigationOptions = {
    title: 'Meus pedidos',
  };

  static propTypes = {
    signOut: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    orders: [],
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = async () => {
    try {
      this.setState({ refreshing: true });
      const { data } = await api.get('orders');

      this.setState({
        orders: data.map(order => ({
          ...order,
          elapsedTime: distanceInWordsToNow(order.created_at, { locale: pt }),
          total: convertToBRL(Number(order.total)),
        })),
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ refreshing: false });
    }
  };

  signOut = () => {
    const { signOut } = this.props;

    signOut();
  };

  renderOrderItem = ({ item, index }) => (
    <OrderItem>
      <OrderInfo>
        <OrderNumber>{`Pedido #${index + 1}`}</OrderNumber>
        <OrderElapsedTime>{item.elapsedTime}</OrderElapsedTime>
        <OrderTotal>{item.total}</OrderTotal>
      </OrderInfo>
      <OrderStatus status={item.status}>{item.status}</OrderStatus>
    </OrderItem>
  );

  render() {
    const { orders, refreshing } = this.state;

    return (
      <Container>
        <OrdersList
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderOrderItem}
          onRefresh={this.loadOrders}
          refreshing={refreshing}
          ListEmptyComponent={(
            <OrderItem>
              <EmptyMessage>Nenhum pedido no histórico</EmptyMessage>
            </OrderItem>
)}
        />
        <Footer>
          <LogoutButton onPress={this.signOut}>
            <LogoutButtonText>SAIR</LogoutButtonText>
          </LogoutButton>
        </Footer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Profile);
