import "./App.css";
import { HeroSection, slides } from "./components/HeroSection";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="App grid grid-cols-1 overflow-hidden">
      <Nav />
      <HeroSection />
    </main>
  );
}

export default App;
