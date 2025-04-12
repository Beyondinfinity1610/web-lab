// ✅ 5. Function Component – Timer App
import React, { useState, useEffect, useRef } from "react";
import { Component } from "react";

const App = () => {
  const [sec, setSeconds] = useState(0);
  const [min, setMinutes] = useState(0);
  const [hr, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
            if(sec === 60) {
              setMinutes((prevmin) => {
                if(min === 60) {
                  setHours((prevhr) => prevhr + 1);
                  setMinutes(0);
                }
                prevmin+1;
              });
              
            }
          prev+1;
        })
          
      }, 1000);
    }
  
    
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => setIsRunning(true);

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

class timer extends Component{


  compo
   render(){

   }
}


  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">⏱ Timer</h2>
      <div className="text-4xl mb-4">{hr} : {min} : {sec}</div>
      <button onClick={start} className="mx-2 px-4 py-2 bg-green-500 text-white rounded" style={{}}>Start</button>
      <button onClick={stop} className="mx-2 px-4 py-2 bg-yellow-500 text-white rounded">Stop</button>
      <button onClick={reset} cl
    </div>
  );
}

export default App;