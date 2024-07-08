class Profile {
  constructor(username, photo) {
    this.username = username;
    this.photo = photo;
  }
  getUsername(){
    return this.username
  }
  getPhoto(){
    return this.photo
  }
}

export default Profile;
