import { ProfileContext } from "../context/profile-context";
import HomeScreenHeader from "../components/homescreen/HomeScreenHeader";
import Profile from "../models/Profile";
import { POSTS, PROFILES } from "../data/DummyData";
import Post from "../components/homescreen/Post";

import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect } from "react";


function HomeScreen() {
  const profileContext = useContext(ProfileContext);

  // ------TEMPORARY CODE UNTIL LOGIN IS CREATED------
  // The purpose of this code is to set the default profile that is currently logged into the app.
  // This can be set later during login time but for now we are setting it here.
  useEffect(() => {
    // const userProfile = new Profile("custo", require("../assets/profilepicture.png"))
    const userProfile = PROFILES[0];
    profileContext.setUsernameTo(userProfile.getUsername());
    profileContext.setPhotoTo(userProfile.getPhoto());
  }, []);
  // ------TEMPORARY CODE UNTIL LOGIN IS CREATED------

  return (
    <View style={styles.homescreenContainer}>
      <HomeScreenHeader />
      <ScrollView>
        <View>
          {POSTS.map((post) => (
            <Post content={post} key={post.getPostID()} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homescreenContainer: {
    flex: 1,
  }
})