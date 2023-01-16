import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  console.log('create item'); // to show that during the
  // conditional rendering with short-circuit operator
  // each time we show item, a new item element is created.
  // and hence [] as useEffect's 2nd param will not work.
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  // You will notice that useEffect callback is called
  // every time we 'Show' the component (click the button)
  // even though we have specified [] in useEffect. For
  // this case we need to use the cleanup function.
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size} px</h2>
    </div>
  );
};

export default ShowHide;
