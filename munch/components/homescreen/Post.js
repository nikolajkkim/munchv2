import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PostHeader from "../PostHeader";


function Post({ content }) {
  return (
    <View style={styles.postContainer}>
      <PostHeader content={content} />
    </View>
  );
}

export default Post;


const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    margin: 20,
  }
});
