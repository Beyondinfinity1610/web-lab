import React from "react";
import profilePic from "../Images/pic.jpg"; // src

const ImageComponent = () => (
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <img src="lab 13/public/images/pic.jpg" alt="Public" width="200" style={{ marginRight: "10px", borderRadius: "10px" }} />
    <img src={profilePic} alt="Src" width="200" style={{ borderRadius: "10px" }} />
  </div>
);

export default ImageComponent;
