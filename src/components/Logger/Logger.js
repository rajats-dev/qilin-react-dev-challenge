import React, { useState } from "react";

const Logger = (Wrappper) => {
  const [show, setShow] = useState(false);

  return (props) => {
    return (
      <>
        {show && <Wrappper {...props} />}
        <button onClick={() => setShow(!show)}>
          {!show ? "Show Component" : "Hide Component"}
        </button>
      </>
    );
  };
};

export default Logger;
