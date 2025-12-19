import Description from "./components/Description";
import "./App.css";
import Carousel from "./components/Carousel";
import { slides } from "./components/HeroSection";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <div className="Caraousel-container">
        <Carousel>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>{" "}
      </div>{" "}
      <Description />
    </main>
  );
}

export default App;
