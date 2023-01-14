import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState); // show it is a function
  console.log(useState()); // show it returns an array
  return <h2>useState basic example</h2>;
};

export default UseStateBasics;
