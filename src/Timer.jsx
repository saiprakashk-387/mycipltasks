import React from "react";
import { memo } from "react";

const Timer = () => {
  const [counter, setCounter] = React.useState(10);
  // First Attempts
  // setInterval(() => setCounter(counter - 1), 1000);

  // Second Attempts
  // React.useEffect(() => {
  //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  // }, []);

  // Second Attempts - Inspection
  // React.useEffect(() => {
  //   counter > 0 &&
  //     setInterval(() => {
  //       console.log(counter);
  //       setCounter(counter - 1);
  //     }, 1000);
  // }, []);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Suggested by Laurent
  //   React.useEffect(() => {
  //     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  //   }, [counter]);
  return (
    <div>
      <div>
        Countdown: {counter} seconds
        {counter === 0 ? (
          <button>Go</button>
        ) : (
          <button disabled>please wait...</button>
        )}
      </div>
    </div>
  );
};

export default memo(Timer);
