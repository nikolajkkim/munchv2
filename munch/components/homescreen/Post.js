import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PostHeader from "./PostHeader";

// --------------- FILE SUMMARY ---------------
// This file is the core of what makes a "Post".
// This includes the 1. Post Header (go to post header file to see what that entails), 2. Post Image, 3. Post Details
// This component is probably called in HomeScreen.js as that is where every post entry in our database is being mapped to this
// "Post" component.

function Post({ content }) {
  return (
    <View style={styles.postContainer}>
      <PostHeader content={content} />
      <View style={styles.postImageContainer}>
        <Image source={content.getImage()} style={styles.postImage} />
      </View>
    </View>
  );
}

export default Post;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    margin: 20,
  },
  postImageContainer:{
    alignItems: 'center',
    marginTop: 10
  },
  postImage: {
    width: deviceWidth,
    height: deviceWidth*(4/3), // 4:3 aspect ratio, adjust as needed
    borderRadius: 10,
  },
});
