import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { distanceInWordsToNow, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';
import { convertToBRL } from '../../services/currency';

import BackButton from '../../components/BackButton';
import OrderModal from '../../components/OrderModal';

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
  static navigationOptions = ({ navigation }) => ({
    title: 'Meus pedidos',
    headerLeft: ({ tintColor }) => (
      <BackButton tintColor={tintColor} onPress={() => navigation.navigate('Main')} />
    ),
  });

  static propTypes = {
    signOut: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    orders: [],
    refreshing: false,
    modalOrder: null,
  };

  componentDidMount() {
    this.setState({ modalOrder: null });
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

  loadOrder = async (id) => {
    try {
      const { data } = await api.get(`orders/${id}`);

      this.setState({
        modalOrder: {
          ...data,
          total: convertToBRL(Number(data.total)),
          created_at: format(data.created_at, 'MM/DD/YYYY [às] HH:mm', { locale: pt }),
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  closeOrder = () => {
    this.setState({ modalOrder: null });
  };

  signOut = () => {
    const { signOut } = this.props;

    signOut();
  };

  renderOrderItem = ({ item, index }) => (
    <OrderItem onPress={() => this.loadOrder(item.id)}>
      <OrderInfo>
        <OrderNumber>{`Pedido #${index + 1}`}</OrderNumber>
        <OrderElapsedTime>{item.elapsedTime}</OrderElapsedTime>
        <OrderTotal>{item.total}</OrderTotal>
      </OrderInfo>
      <OrderStatus status={item.status}>{item.status}</OrderStatus>
    </OrderItem>
  );

  render() {
    const { orders, refreshing, modalOrder } = this.state;

    return (
      <Container>
        {modalOrder ? <OrderModal order={modalOrder} closeOrder={this.closeOrder} /> : null}

        <OrdersList
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderOrderItem}
          onRefresh={this.loadOrders}
          refreshing={refreshing}
          ListEmptyComponent={
            !refreshing && (
              <OrderItem>
                <EmptyMessage>Nenhum histórico de pedido</EmptyMessage>
              </OrderItem>
            )
          }
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
