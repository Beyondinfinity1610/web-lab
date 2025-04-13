import React from "react";
import ImageComponent from "./ImageComponent";
import LoginForm from "./LoginForm";
import Index from "./Index";

const App = () => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <ImageComponent />
    <LoginForm />
    <Index />
  </div>
);

export default App;
