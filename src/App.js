import Landing from "../src/components/Landing/Landing";
import Face from "../src/components/Face/Face";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="fixedFace">
        <Face />
        <Landing />
      </div>
    </div>
  );
}

export default App;
