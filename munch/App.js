import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/ProfileScreen";
import FriendScreen from "./screens/FriendsScreen";
import LoginScreen from "./screens/LoginScreen";
import LoginDetailScreen from "./screens/LoginDetailScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MunchMapScreen from "./screens/HomeScreen";
import ProfileContextProvider from "./context/profile-context";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.rootScreen}>
        <ProfileContextProvider>
          <NavigationContainer>
            <SafeAreaView style={styles.safeAreaTop}></SafeAreaView>
            <Stack.Navigator
              initialRouteName="LoginScreen"
              screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "white" },
              }}
            >
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="ProfileScreen" component={AccountScreen} />
              <Stack.Screen
                name="FriendsScreen"
                component={FriendScreen}
                options={{
                  gestureDirection: "horizontal-inverted",
                }}
              />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="LoginDetailScreen" component={LoginDetailScreen} />
              <Stack.Screen name="MunchMapScreen" component={MunchMapScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ProfileContextProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  safeAreaTop: {
    flex: 0,
  },
});
