import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Contact from "./components/Contact";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#503700]">
        <div className="bg-coffee-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
