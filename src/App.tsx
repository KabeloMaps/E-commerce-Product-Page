import Description from "./components/Description";
import "./App.css";
import Carousel from "./components/Carousel";
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
