import React, { useState } from 'react';

function WelcomeFC(props) {
    console.log("props", props);
    const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>HI, {props.name}!</h1>
      <h6>{counter}</h6>
      <button onClick = {()=>
        setCounter(counter + 1)
      }
      >
      +
      </button>
    </>
  );
}

export default WelcomeFC;