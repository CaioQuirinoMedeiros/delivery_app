import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>SIGN UP</Text>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text>Já tenho login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
