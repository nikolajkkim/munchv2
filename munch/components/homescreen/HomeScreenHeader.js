import { ProfileContext } from "../../context/profile-context";

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
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";

// --------------- FILE SUMMARY ---------------
// This file contains the contents of the header for the home screen.
// Consists of 1. Friends button that sends you to the friends screen, 2. munch logo, and 3. profile
// icon that sends you to the profile screen. 
// This component is probably used in the HomeScreen.js file.

// Constants to adjust if you want to change icon sizes.
const deviceWidth = Dimensions.get("window").width;
const friendIconSize = 30;
const profileImageSize = 45;

function HomeScreenHeader() {
  const profileContext = useContext(ProfileContext);
  const navigation = useNavigation();

  function friendsIconHandler() {
    // This function is called if the friends icon is pressed.
    // Sends the user to the friends screen.
    navigation.navigate("FriendsScreen");
  }

  function profileIconHandler() {
    // This function is called if the profile icon is pressed.
    // Ssends the user to the profile screen.
    navigation.navigate("ProfileScreen");
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.friendsIconContainer}>

        {/* This is top left friends icon button */}
        <Pressable
          onPress={friendsIconHandler}
          style={({ pressed }) => (pressed ? styles.iconPressed : null)}
        >
          <FontAwesome5
            name="user-friends"
            size={friendIconSize}
            color="black"
          />
        </Pressable>
      </View>

      {/* This is center munch logo */}
      <View style={styles.munchLogoContainer}>
        <Image
          source={require('../../assets/munchlogo.png')}
          style={styles.munchLogo}
        />
      </View>

      {/* This is top right profile icon button */}
      <View style={styles.profileIconContainer}>
        <Pressable
          onPress={profileIconHandler}
          style={({ pressed }) => (pressed ? styles.iconPressed : null)}
        >
          <Image
            source={profileContext.profilePhoto}
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
  iconPressed: {
    opacity: 0.5,
  },
});
