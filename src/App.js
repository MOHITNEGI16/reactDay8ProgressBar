// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState("Loading...");

  useEffect(() => {
    let interval = setTimeout(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    if (progress === 100) {
      setState("Complete!");
      clearInterval(interval);
    }
  }, [progress]);
  return (
    <>
      <main>
        <p id="heading"> Progress Bar</p>
        <div id="main_progress">
          <div
            id="progressBar"
            style={{
              width: `${progress}%`,
              height: "100%"
            }}
          ></div>
          <span style={{color: progress < 50 ? "black" : "white"}}>{progress}%</span>
        </div>
        <p>{state}</p>
      </main>
    </>
  );
}

export default App;
