import {
  Text,
  Button,
  Image,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// This file contains the contents of the header for the home screen.
// Consists of 3 things... Friends button that sends you to the friends screen, munch logo, and profile
// icon that sends you to the profile screen.

// Constants to adjust if you want to change icon sizes.
const deviceWidth = Dimensions.get("window").width;
const friendIconSize = 30;
const profileImageSize = 45;

function HomeScreenHeader() {
  function button1handler() {
    // This function is called if the friends icon is pressed.
    // Sends the user to the friends screen.
    console.log("working");
  }

  function button2handler() {
    // This function is called if the profile icon is pressed.
    // Ssends the user to the profile screen.
    console.log("working2");
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.friendsIconContainer}>
        <Pressable onPress={button1handler}>
          <FontAwesome5
            name="user-friends"
            size={friendIconSize}
            color="black"
          />
        </Pressable>
      </View>

      <View style={styles.munchLogoContainer}>
        <Image
          source={require("../assets/munchlogo.png")}
          style={styles.munchLogo}
        />
      </View>

      <View style={styles.profileIconContainer}>
        <Pressable onPress={button2handler}>
          <Image
            source={require("../assets/profilepicture.png")}
            style={styles.profileImage}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 10,
  },
  friendsIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: deviceWidth * 0.05,
  },
  munchLogoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  munchLogo: {
    width: deviceWidth * 0.3,
  },
  profileIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: deviceWidth * 0.05,
  },
  profileImage: {
    width: profileImageSize,
    height: profileImageSize,
    borderRadius: 30,
  },
});
