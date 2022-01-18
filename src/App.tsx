import { useState, useEffect } from "react";
import { PostType } from "./interfaces";
import axios from "axios";
import ChooseDate from "./components/chooseDate";
import dateToString from "./helpers/dateToString";
import addDays from "./helpers/addDays";
import Card from "./components/card";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [date, setDate] = useState<Date>(new Date(2000, 0, 1));

  useEffect(() => {
    const baseURL = "https://api.nasa.gov/planetary/apod";
    const apiKey = "3VyHM1tGyfOh7MBtf0RCKQTDJPxE7Vqt7cJfcyYh";
    const startDate = dateToString(date);
    const endDate = dateToString(addDays(date, 7));
    axios.get(`${baseURL}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`)
      .then((res) => setPosts(res.data));
  }, [date]);

  return (
    <div className="App">
      <ChooseDate date={date} setDate={setDate} />
      {posts.map((photo) => {
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
