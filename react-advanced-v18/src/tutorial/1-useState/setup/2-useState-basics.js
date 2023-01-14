import React, { useState } from 'react';

// use
// - component name must start with uppercase
// - must be in the function/component body
// - cannot call conditionally
// for example if you change UseStateBasics to useStateBasics in
// const and export, and reload the page the browser will display
// Failed to compile error.

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // destructure the returned array. the naming convention is
  // to name the function 'set' and the name of the variable,
  // which in our case is 'text'
  const [text, setText] = useState('random title'); // value can be array, number, string, boolean e.g. 109
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello people');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
