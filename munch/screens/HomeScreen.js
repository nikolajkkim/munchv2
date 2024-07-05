import { ScrollView, Text } from "react-native";
import HomeScreenHeader from "../components/HomeScreenHeader";

function HomeScreen() {
  return <ScrollView>
    <HomeScreenHeader />
    <Text>Home Screen</Text>
  </ScrollView>
}

export default HomeScreen;
