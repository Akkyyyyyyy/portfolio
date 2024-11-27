import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResumeButton from './components/ResumeButton';
// import Footer from "./components/Footer"; // Import Footer
import "./App.css"; // Global styles

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <ResumeButton/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
