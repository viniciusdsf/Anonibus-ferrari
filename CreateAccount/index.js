import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { } from './styles';

import { AuthContext } from '../context';

import firebase from 'firebase';

export default CreateAccount = () => {

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          placeholder="Insira seu email"
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <TextInput
          placeholder="Insira sua senha"
          style={styles.input_auth}
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Criar Conta" onPress={() => handleSignUp()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 20
  },
  input_auth: {
    borderColor: '#666',
    borderWidth: 1,
    flex: 1,
    borderRadius: 5,
    margin: 10,
    marginTop: 0,
    padding: 5
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  }
});

