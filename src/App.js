import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
