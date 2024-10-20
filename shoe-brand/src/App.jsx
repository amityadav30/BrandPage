import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div style={{ width: "1225px", height: "613px", margin: "auto" }}>
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
