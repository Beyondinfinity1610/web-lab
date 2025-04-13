import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const Index = () => (
  <div style={{ padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px", maxWidth: "400px", margin: "auto" }}>
    <ProfileImage />
    <UserInfo />
    <UserPosts />
  </div>
);

export default Index;
