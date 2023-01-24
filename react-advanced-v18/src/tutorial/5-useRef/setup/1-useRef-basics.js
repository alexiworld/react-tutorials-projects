import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('REF:', refContainer.current.value);
    console.log('DIV:', divContainer);
  };
  console.log(refContainer);
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div ref={divContainer}>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
