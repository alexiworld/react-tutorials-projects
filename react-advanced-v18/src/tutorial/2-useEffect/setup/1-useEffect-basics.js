import React, { useState, useEffect } from 'react';
// useEffect is about the work done outside the component, from the video.
// useEffect is used when we want to setup side effect, and that is some
// work outside of the component, e.g. data fetching, listening for events,
// signing up for subscriptions, stuff along those lines. By default it will
// run after every render and the way it works we pass a callback function
// and whatever functionality we setup within that callback will run after every render.

// by default useEffect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // DANGER DANGER ... we cannot place hooks inside conditionals.
  // This will not work.
  if (value > 0) {
    useEffect(() => {
      console.log('call useEffect');
      document.title = `New Messages(${value})`;
    });
  }
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() =>
          setValue((prevValue) => {
            return prevValue + 1;
          })
        }
      >
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
