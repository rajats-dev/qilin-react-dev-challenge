import React from "react";
import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component unMounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [counter]);

  return (
    <>
      <p>This is LifeCycle Component</p>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increase Counter
      </button>
    </>
  );
};

export default LifeCycle;
