import Slide from "./components/SlideShow/Slide";
import { imageData } from "./data/imageData"; 
import './App.css'

function App() {
  return (
    <>
    <div className="container">
      <Slide imgArr = {imageData} animation={"manual"} />
    </div>
    <div className="container2">
      <Slide imgArr = {imageData} animation={"auto"} />
    </div>
    </>
  );
}

export default App;
