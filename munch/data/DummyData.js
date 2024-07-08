import Post from "../models/Post";
import Profile from "../models/Profile";

export const PROFILES = [
  new Profile("custo", require("../assets/profile-photos/profilephoto1.png")),
  new Profile("nikolaj", require("../assets/profile-photos/profilephoto1.png")),
  new Profile("jamie", require("../assets/profile-photos/profilephoto1.png")),
  new Profile("steven", require("../assets/profile-photos/profilephoto2.png")),
  new Profile("jake", require("../assets/profile-photos/profilephoto1.png")),
];

export const POSTS = [
  new Post(1, PROFILES[0], new Date(), 4.5, require("../assets/post-photos/postphoto1.png"), "Cha For Tea", "yummy yummy"),
  new Post(2, PROFILES[3], new Date(), 3.5, require("../assets/post-photos/postphoto2.png"), "BJ's Restaurant & Brewhouse", "mid")
]