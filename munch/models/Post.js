class Post {
    constructor(postID, profile, timestamp, rating, image, location, caption) {
      this.postID = postID
      this.profile = profile;
      this.timestamp = timestamp;
      this.rating = rating;
      this.image = image;
      this.location = location;
      this.caption = caption;
    }
    getPostID() {
        return this.postID
    }
    getProfile() {
      return this.profile;
    }
    getTimestamp() {
      return this.timestamp;
    }
    getRating() {
      return this.rating;
    }
    getImage() {
      return this.image;
    }
    getLocation() {
      return this.location;
    }
    getCaption() {
      return this.caption;
    }
  }
  
  export default Post;