import { StyleSheet, View, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// --------------- FILE SUMMARY ---------------
// This is a pretty simple component that just contains text and styling for the 
// "location portion" of a post. 
// "location" is the name of a restaurant of a post.

function PostLocation({ location }) {
  return (
    <View style={styles.postLocationContainer}>
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text style={styles.postLocation}>{location}</Text>
    </View>
  );
}

export default PostLocation;

const styles = StyleSheet.create({
  postLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  postLocation: {
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
});
