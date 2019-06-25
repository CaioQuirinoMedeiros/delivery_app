import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { Container } from "../../styles";

export default class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>SIGN IN</Text>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
