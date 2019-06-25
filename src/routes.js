import { createAppContainer, createStackNavigator } from "react-navigation";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

const Routes = createAppContainer(
  createStackNavigator(
    { SignIn, SignUp },
    { initialRouteName: "SignIn", headerMode: "none" }
  )
);

export default Routes;
