import { createAppContainer, createStackNavigator } from "react-navigation";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Routes = createAppContainer(
  createStackNavigator(
    { SignIn, SignUp },
    { initialRouteName: "SignIn", headerMode: "none" }
  )
);

export default Routes;
