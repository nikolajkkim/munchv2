import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect } from "react";

import { ProfileContext } from "../context/profile-context";
import Profile from "../models/Profile";
import { POSTS, PROFILES } from "../data/DummyData";
import {HomeScreenHeader, Post} from "../components/homescreen"



// --------------- FILE SUMMARY ---------------
// This file is the source of the home screen. 
// Trying to keep this file as clean as possible, we have turned almost everything including HomeScreenHeader and Post
// into a component. check components/homescreen for all the components we have created
// for this file. 

function HomeScreen() {
  const profileContext = useContext(ProfileContext);

  // ------TEMPORARY CODE UNTIL LOGIN IS CREATED START------
  // The purpose of this code is to set the default profile that is currently logged into the app.
  // This can be set later during login time but for now we are setting it here.
  useEffect(() => {
    // const userProfile = new Profile("custo", require("../assets/profilepicture.png"))
    const userProfile = PROFILES[0];
    profileContext.setUsernameTo(userProfile.getUsername());
    profileContext.setPhotoTo(userProfile.getPhoto());
  }, []);
  // ------TEMPORARY CODE UNTIL LOGIN IS CREATED END------

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
  },
});
