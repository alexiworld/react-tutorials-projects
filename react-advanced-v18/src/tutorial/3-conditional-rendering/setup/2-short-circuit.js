import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('k');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
      {/* {if (true) {console.log('hello world');}} */}
    </>
  );
};

export default ShortCircuit;
