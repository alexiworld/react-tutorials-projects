import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  const [isError, setIsError] = useState(false);

  // Note: we cannot use 'if' to conditionally render because
  // it does not return a value. We need to use either short-
  // circuit operator or ternary operator as shown below. The
  // difference between the two is that short-circuit operator
  // display only if the condition is true while ternary always
  // displays some but probably different output depending on
  // the condition being true or false.
  return (
    <>
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
