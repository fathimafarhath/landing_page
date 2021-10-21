import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import aboutimage from './images/about.png'
import aboutimage1 from './images/download.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Comes with All you need for daily life" button="Get the App" />
      <Presentation />
      <About image={aboutimage1} title="Download and get the app now" button="Download" />
      <Contact />
    </div>
  );
}

export default App;
