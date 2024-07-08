import { ProfileContext } from "../context/profile-context";
import HomeScreenHeader from "../components/HomeScreenHeader";
import Profile from "../models/Profile";

import { Button, ScrollView, Text } from "react-native";
import { useContext, useEffect } from "react";


function HomeScreen() {
  const profileContext = useContext(ProfileContext);

  // ------TEMPORARY CODE UNTIL LOGIN IS CREATED------
  // The purpose of this code is to set the default profile that is currently logged into the app.
  // This can be set later during login time but for now we are setting it here.
  useEffect(() => {
    const userProfile = new Profile("custo", require("../assets/profilepicture.png"))
    profileContext.setUsernameTo(userProfile.getUsername());
    profileContext.setPhotoTo(userProfile.getPhoto());
  }, []);
  // ------TEMPORARY CODE UNTIL LOGIN IS CREATED------

  return (
    <ScrollView>
      <HomeScreenHeader />
      <Text>User logged in username: {profileContext.profileUsername}</Text>
      <Text>User logged in photo path: {profileContext.profilePhoto}</Text>
    </ScrollView>
  );
}

export default HomeScreen;
