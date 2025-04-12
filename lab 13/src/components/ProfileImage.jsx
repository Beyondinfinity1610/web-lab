import React from "react";
import profilePic from "../Images/pic.jpg"

const ProfileImage = () => <img src={profilePic} alt="Profile" width="150" style={{ borderRadius: "50%", border: "2px solid #ddd", marginBottom: "10px" }} />;

export default ProfileImage;
