import "./styles.css";
import { ReactComponent as Hour } from "./hour.svg";
import { ReactComponent as Minute } from "./minute.svg";
import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = time?.getSeconds();

  const minuteDiv = document.getElementById("min-div");
  minuteDiv.style.transform = `rotate(${minutes * 6 - 180}deg)`;

  return (
    <div className="App">
      <div className="hour-div">
        <Hour />
      </div>
      <div className="min-div" id="min-div">
        <Minute />
      </div>
      <div className="clock">
        <div className="hour-block"></div>
        <div className="min-block"></div>
      </div>
    </div>
  );
}
