import React from "react";
import userImage from "../src/Images/pic.jpg";

const ImageComponent = () => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <img src="/images/pp.webp" alt="Public File" width="200" height="200" style={{ marginRight: "10px" }} />
    <img src={userImage} alt="Private File" width="200" />
  </div>
);

export default ImageComponent;
