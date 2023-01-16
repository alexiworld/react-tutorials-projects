import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  // [] is required to prevent adding a new event listener every
  // time.
  // to see the problem, resize the window a few times, seeing the
  // new widths in the console log being printed out on every
  // change, and then go to the Elements tab of Dev Tools, and Event
  // Listeners subtab. There you will under 'resize' node see
  // multiple Window event listeners with the line 10 (of the
  // checkSize) being listed.
  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, []);

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
