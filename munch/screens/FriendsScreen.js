import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FriendsScreen() {
  navigation = useNavigation();
  function backButtonHandler() {
    navigation.pop()
  }

  return <View>
    <Button title="Back" onPress={backButtonHandler} />
    <Text>FriendsScreen</Text>
  </View>;
}

export default FriendsScreen;
