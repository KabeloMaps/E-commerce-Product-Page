import "./App.css";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";

const slides = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
];

function App() {
  return (
    <main>
      <Nav />
      <div className="">
        <Carousel>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>{" "}
      </div>{" "}
    </main>
  );
}

export default App;
