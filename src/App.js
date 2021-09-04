import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="fixedFace">STICKY FACE</div>
      <div>
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
