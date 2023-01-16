import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // in JS at encountering the first return
  // the code will return.
  return 'hello world';
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
