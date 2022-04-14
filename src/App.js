import "./App.css";
import { useState } from "react";
import gh from "./Git.png";

function App() {
  //Fetching Time
  let Mytime = new Date().toLocaleTimeString();

  // UseState-->
  const [Time, setTime] = useState(Mytime);

  //update time function
  const update = () => {
    Mytime = new Date().toLocaleTimeString();
    setTime(Mytime);
  };

  //setInterval will work after every 1second
  setInterval(update, 1000); //1second

  return (
    <>
      <div className="container">
        <h1>{Time}</h1>
      </div>
      <div className="ME">
        <a href="https://github.com/Vaibhav9526">
          <h4>
            <img src={gh} alt="GitHub" /> BY VAIBHAV
          </h4>
        </a>
      </div>
    </>
  );
}

export default App;
