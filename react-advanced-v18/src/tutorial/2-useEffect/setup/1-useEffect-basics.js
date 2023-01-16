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
  // The other way to make it work is to pass list of dependencies,
  // which is the second parameter of useEffect. The empty array
  // would make the function passed as a first param of useEffect
  // to run only in the initial render.
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, []); // notice the empty array passed as a second parameter.
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
