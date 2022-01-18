import "./App.css";
import Card from "./components/card";
import { useState, useEffect } from "react";
import { PhotoType } from "./interfaces";
import axios from "axios";

const apiKey = "3VyHM1tGyfOh7MBtf0RCKQTDJPxE7Vqt7cJfcyYh";

function App() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`)
      .then((res) => setPhotos(res.data));
  }, []);

  return (
    <div className="App">
      {photos.map((photo) => {
        return (
          <div className="flex justify-center mt-10">
            <Card photo={photo} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
