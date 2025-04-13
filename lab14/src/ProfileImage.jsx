import React from "react";
import userImage from "../src/Images/pic.jpg";

const ProfileImage = () => (
  <img src={userImage} alt="" width="150" style={{ borderRadius: "50%", display: "block", margin: "auto" }} />
);

export default ProfileImage;
