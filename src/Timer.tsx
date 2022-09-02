import React, { useState, useEffect, useRef } from "react";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped"
};

const INITIAL_COUNT = 24;

export default function CountdownApp() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining;

  // https://stackoverflow.com/a/2998874/1673761
  const twoDigits = (num: number) => String(num).padStart(2, "0");

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };

  // source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(
    callback: () => void | undefined,
    delay: number | null | undefined
  ) {
    const savedCallback = useRef();

    // Remember latest callback
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up timer
    useEffect(() => {
      function tick() {
        if (savedCallback.current) savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );
  return (
    <div className="App">
      <button
        className="bg-green-500 text-white rounded-xl m-2 px-4 py-2"
        onClick={handleStart}
        type="button"
      >
        Start
      </button>
      <button
        className="bg-green-500 text-white rounded-xl m-2 px-4 py-2"
        onClick={handleStop}
        type="button"
      >
        Stop
      </button>
      <div className="flex justify-center text-5xl py-5 mx-2 border-2 rounded-lg bg-white">
        {twoDigits(secondsToDisplay)}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-500 text-white rounded-xl m-2 px-4 py-2"
          onClick={handleReset}
          type="button"
        >
          Reset
        </button>
      </div>
      <div className="flex justify-center text-white">{status}</div>
    </div>
  );
}
