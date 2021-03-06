import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import BackButton from './components/BackButton'

import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

import Main from './pages/Main'
import Products from './pages/Products'
import Sizes from './pages/Sizes'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Order from './pages/Order'

const AuthStack = createStackNavigator(
  { SignIn, SignUp },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    transparentCard: true
  }
)

const AppStack = createStackNavigator(
  {
    Main,
    Products,
    Sizes,
    Cart,
    Profile,
    Order
  },
  {
    initialRouteName: 'Main',
    headerMode: 'float',
    transparentCard: true,
    defaultNavigationOptions: {
      headerStyle: {
        height: 75,
        backgroundColor: 'transparent'
      },
      headerTintColor: '#fff',
      headerLeft: BackButton,
      headerTitleStyle: { marginHorizontal: 0, fontWeight: 'bold' }
    }
  }
)

const createNavigator = isLoggedIn =>
  createAppContainer(
    createSwitchNavigator(
      { AuthStack, AppStack },
      { initialRouteName: isLoggedIn ? 'AppStack' : 'AuthStack' }
    )
  )

export default createNavigator
