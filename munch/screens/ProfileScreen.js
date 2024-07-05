import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  navigation = useNavigation();
  function backButtonHandler() {
    navigation.pop()
  }

  return <View>
    <Button title="Back" onPress={backButtonHandler} />
    <Text>ProfileScreen</Text>
  </View>;
}

export default ProfileScreen;
