import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';


export default HomeDetails = ({ route }) => {

  return (
    <View style={styles.container}>
      <Text>DETALHES</Text>
      {route.params &&
        <Text>{route.params.name}</Text>
      }

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

