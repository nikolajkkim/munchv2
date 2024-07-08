import { StyleSheet, Text, View } from "react-native";

// --------------- FILE SUMMARY ---------------
// This is a pretty simple component that just contains text and styling for the 
// "caption portion" of a post. 
// "username" is the user that made the post and "caption" is their caption

function PostCaption({ username, caption }) {
  return (
    <View style={styles.postCaptionContainer}>
      <Text style={styles.postCaptionUser}>
        {username}
      </Text>
      <Text style={styles.postCaption}>{caption}</Text>
    </View>
  );
}

export default PostCaption;

const styles = StyleSheet.create({
    postCaptionContainer: {
        flexDirection: "row",
        marginHorizontal: 8
      },
      postCaptionUser: {
        fontWeight: "bold",
        fontSize: 15,
      },
      postCaption: {
        paddingLeft: 5,
      },
})