import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function TestLoginScreen() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmitHander() {
    dict = {
        userName: userName,
        email: email
    }
    console.log(dict)
  }
  function changeUserName(enteredUserName) {
    setUserName(enteredUserName);
  }
  function changeEmail(enteredEmail) {
    setEmail(enteredEmail);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={changeUserName}
        value={userName}
      />
      <TextInput
        style={styles.input}
        onChangeText={changeEmail}
        value={email}
      />
      <Button title="submit" onPress={onSubmitHander} />
    </View>
  );
}

export default TestLoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
