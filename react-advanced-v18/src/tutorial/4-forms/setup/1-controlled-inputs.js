import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    console.log('hello world');
    e.preventDefault();
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type='text' id='firstName' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input type='text' id='email' name='email' />
          </div>
          {/* or define onClick attribute passing the handleSubmit fn */}
          <button type='submit'>add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
