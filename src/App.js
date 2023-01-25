import { useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [sec, setSecond] = useState("");
  const maxLength = "2";

  return (
    <div className="container">
      <span className="container__title">Countdown Timer</span>

      <div className="container__labels">
        <p className="container__labels--label">Hours</p>
        <p className="container__labels--label">Minutes</p>
        <p className="container__labels--label">Seconds</p>
      </div>

      <div className="container__inputs">
        <input
          type="number"
          maxLength={2}
          value={hour}
          onInput={(event) => setHour(event.target.value.slice(0, maxLength))}
          className="container__inputs--time hour"
          placeholder="00"
        />
        <p className="container__inputs--colon">:</p>
        <input
          type="number"
          maxLength={2}
          value={minute}
          onInput={(event) => setMinute(event.target.value.slice(0, maxLength))}
          className="container__inputs--time minute"
          placeholder="00"
        />
        <p className="container__inputs--colon">:</p>
        <input
          type="number"
          maxLength={2}
          value={sec}
          onInput={(event) => setSecond(event.target.value.slice(0, maxLength))}
          className="container__inputs--time sec"
          placeholder="00"
        />
      </div>

      <div className="container__btns">
        <button className="btn start">Start</button>
        <button className="btn stop">Stop</button>
        <button className="btn reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
