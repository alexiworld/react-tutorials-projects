import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // Solving the problem with multiple registered event listeners
  // by providing a cleanup function. The course instructor agrees
  // that my own approach is more suitable for solving this problem
  // but wants to show what the cleanup function is. The cleanup
  // function as we gonna see when we start dealing with disappearing
  // and reappearing of the components, will be very important.
  // There will be components that will be gonna displayed and later
  // removed. The problem is with that event listeners might be
  // added. It is a good practice each time you set up useEffect to
  // set up a cleanup function so you don't make a big mess by adding
  // tons of subscriptions, tons of listeners.
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
