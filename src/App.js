import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [sec, setSecond] = useState("");
  const [countdownTimer, setCountdownTimer] = useState("");
  const [startStyle, setStartStyle] = useState("btn start");
  const [stopStyle, setStopStyle] = useState("btn stop");
  const [startDisplay, setStartDisplay] = useState("Start");
  const maxLength = "2";

  const start = () => {
    if (hour == 0 && minute == 0 && sec == 0) {
      return;
    }
    setStartStyle("btn start2");
    setStopStyle("btn stop2");
    startTimer();
  };

  const startTimer = () => {
    setCountdownTimer(
      setInterval(() => {
        timer();
      }, 1000)
    );
  };

  const stop = () => {
    stopTimer("pause");
  };

  const stopTimer = (value) => {
    setStartDisplay(value === "pause" ? "Continue" : "Start");
    setStartStyle("btn start3");
    setStopStyle("btn stop");
    clearInterval(countdownTimer);
  };

  const reset = () => {
    setHour("");
    setMinute("");
    setSecond("");
    stopTimer();
  };

  const timer = () => {
    // Formatting the time - START
    if (parseInt(sec === "" ? "00" : sec) > 60) {
      setMinute((parseInt(minute === "" ? "00" : minute) + 1).toString());
      setSecond((parseInt(sec === "" ? "00" : sec) - 59).toString());
    }
    if (parseInt(minute === "" ? "00" : minute) > 60) {
      setHour((parseInt(hour === "" ? "00" : hour) + 1).toString());
      setMinute((parseInt(minute === "" ? "00" : minute) - 60).toString());
    }
    setMinute(parseInt(minute === "" ? "00" : minute) > 60 ? "60" : minute);
    // Formatting the time - END

    // Updating the Time - START
    if (hour == 0 && minute == 0 && sec == 0) {
      setHour("");
      setMinute("");
      setSecond("");
      stopTimer();
    } else if (parseInt(sec === "" ? "00" : sec) !== 0) {
      setSecond(
        `${parseInt(sec === "" ? "00" : sec) <= 10 ? "0" : ""}${
          parseInt(sec === "" ? "00" : sec) - 1
        }`
      );
    } else if (parseInt(minute === "" ? "00" : minute) !== 0 && sec == 0) {
      setSecond(59);
      setMinute(
        `${parseInt(minute === "" ? "00" : minute) <= 10 ? "0" : ""}${
          parseInt(minute === "" ? "00" : minute) - 1
        }`
      );
    } else if (parseInt(hour === "" ? "00" : hour) !== 0 && minute == 0) {
      setMinute(60);
      setHour(
        `${parseInt(hour === "" ? "00" : hour) <= 10 ? "0" : ""}${
          parseInt(hour === "" ? "00" : hour) - 1
        }`
      );
    }
    return;
    // Updating the Time - END
  };

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
          value={hour}
          onInput={(event) => setHour(event.target.value.slice(0, maxLength))}
          className="container__inputs--time hour"
          placeholder="00"
        />
        <p className="container__inputs--colon">:</p>
        <input
          type="number"
          value={minute}
          onInput={(event) => setMinute(event.target.value.slice(0, maxLength))}
          className="container__inputs--time minute"
          placeholder="00"
        />
        <p className="container__inputs--colon">:</p>
        <input
          type="number"
          value={sec}
          onInput={(event) => setSecond(event.target.value.slice(0, maxLength))}
          className="container__inputs--time sec"
          placeholder="00"
        />
      </div>

      <div className="container__btns">
        <button className={startStyle} onClick={start}>
          {startDisplay}
        </button>
        <button className={stopStyle} onClick={stop}>
          Stop
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
