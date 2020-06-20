import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';


export default Base = () => {

  return (
    <View style={styles.container}>
      <Text>Tela Principal</Text>
      <Button title="Texto Botao" onPress={() => alert('Click')} />
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
  }
});

