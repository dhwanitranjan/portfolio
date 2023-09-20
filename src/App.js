import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <SocialLinks />
    </div>
  );
}

export default App;
