import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Stars from "react-native-stars";
import { Ionicons } from "@expo/vector-icons";

function getTimeSincePost(postDate) {
  const now = new Date();
  const differenceInMilliseconds = now - postDate;

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day(s) ago`;
  } else if (hours > 0) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  } else {
    return `${seconds} second(s) ago`;
  }
}

function PostHeader({ content }) {
  return (
    <View style={styles.postHeaderContainer}>
      <Image
        source={content.getProfile().getPhoto()}
        style={styles.profilePhoto}
      />
      <View style={styles.usernameTimeContainer}>
        <Text style={styles.username}>
          {content.getProfile().getUsername()}
        </Text>
        <Text style={styles.time}>
          {getTimeSincePost(content.getTimestamp())}
        </Text>
      </View>
      <View style={styles.starContainer}>
        <Stars
          default={content.getRating()}
          count={5}
          half={true}
          starSize={15} // Adjust the size of the stars as needed
          fullStar={<Ionicons name="star" size={24} color="black" />}
          emptyStar={<Ionicons name="star-outline" size={24} color="black" />}
          halfStar={<Ionicons name="star-half" size={24} color="black" />}
        />
      </View>
    </View>
  );
}

export default PostHeader;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  postHeaderContainer: {
    flex: 1,
    flexDirection: "row",
  },
  profilePhoto: {
    width: deviceWidth * 0.1,
    height: deviceWidth * 0.1,
    borderRadius: 30,
  },
  usernameTimeContainer: {
    flexGrow: 1,
    paddingLeft: 10,
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
  },
  time: {
    color: "#837774",
    fontSize: 10,
  },
  starContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
