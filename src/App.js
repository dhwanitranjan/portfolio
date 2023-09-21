import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
