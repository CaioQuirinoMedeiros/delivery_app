import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {parseISO, formatDistanceToNow, format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {ToastActionsCreators} from 'react-native-redux-toast';

import api from '../../services/api';
import {convertToBRL} from '../../services/currency';
import AuthActions from '../../store/ducks/auth';

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

function Profile() {
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [modalOrder, setModalOrder] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      setRefreshing(true);

      const {data} = await api.get('orders');

      setOrders(
        data.map(order => ({
          ...order,
          elapsedTime: formatDistanceToNow(parseISO(order.created_at), {
            locale: pt,
            addSuffix: true,
          }),
          total: convertToBRL(Number(order.total)),
        })),
      );
    } catch (err) {
      dispatch(ToastActionsCreators.displayError('Erro ao carregar pedidos'));
    } finally {
      setRefreshing(false);
    }
  }

  async function loadOrder(orderId) {
    try {
      const {data} = await api.get(`orders/${orderId}`);

      setModalOrder({
        ...data,
        total: convertToBRL(Number(data.total)),
        created_at: format(parseISO(data.created_at), "MM/DD/YYYY 'às' HH:mm", {
          locale: pt,
        }),
      });
    } catch (err) {
      dispatch(ToastActionsCreators.displayError('Erro ao exibir pedido'));
    }
  }

  function closeOrder() {
    setModalOrder(null);
  }

  function signOut() {
    dispatch(AuthActions.signOut());
  }

  function renderOrderItem({item, index}) {
    return (
      <OrderItem onPress={() => loadOrder(item.id)}>
        <OrderInfo>
          <OrderNumber>{`Pedido #${index + 1}`}</OrderNumber>
          <OrderElapsedTime>{item.elapsedTime}</OrderElapsedTime>
          <OrderTotal>{item.total}</OrderTotal>
        </OrderInfo>
        <OrderStatus status={item.status}>{item.status}</OrderStatus>
      </OrderItem>
    );
  }

  return (
    <Container>
      {modalOrder && <OrderModal order={modalOrder} closeOrder={closeOrder} />}

      <OrdersList
        data={orders}
        keyExtractor={item => String(item.id)}
        renderItem={renderOrderItem}
        onRefresh={loadOrders}
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
        <LogoutButton onPress={signOut}>
          <LogoutButtonText>SAIR</LogoutButtonText>
        </LogoutButton>
      </Footer>
    </Container>
  );
}

Profile.navigationOptions = ({navigation}) => ({
  title: 'Meus pedidos',
  headerLeft: ({tintColor}) => (
    <BackButton
      tintColor={tintColor}
      onPress={() => navigation.navigate('Main')}
    />
  ),
});

export default Profile;
