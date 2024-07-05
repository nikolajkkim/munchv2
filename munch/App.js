import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/ProfileScreen";
import FriendScreen from "./screens/FriendsScreen";
import LogInScreen from "./screens/LogInScreen";
import MunchMapScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootScreen}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={AccountScreen} />
            <Stack.Screen
              name="FriendsScreen"
              component={FriendScreen}
              options={{
                gestureDirection: "horizontal-inverted"
              }}
            />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="MunchMapScreen" component={MunchMapScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
