import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const Index = () => (
  <div style={{ maxWidth: "350px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#fff", textAlign: "center" }}>
    <ProfileImage />
    <UserInfo />
    <UserPosts />
  </div>
);

export default Index;
