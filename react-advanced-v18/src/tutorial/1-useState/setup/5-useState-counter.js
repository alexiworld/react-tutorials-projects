import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    // The problem is with double or tripple clicking of the button
    // as the final result will not be the value +2 or +3 but will
    // be +1. Why? Because these invokations of complexIncrease are
    // so close in time (< 2000ms) so they all pick up the same
    // value e.g. 2 and increase it by 1, resulting in all them
    // setting up 3 as a state value.
    // setTimeout(() => {
    //   setValue(value + 1);
    // }, 2000);

    // So what is the proper solution then:
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
