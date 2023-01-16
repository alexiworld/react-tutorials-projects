import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // Cannot use async in useEffect. You can either setup
  // async in the useEffect callback functions or outside
  // which is what the course instructor exactly will do.
  // Trying to run the code as is now (with async) will
  // result in seeing "react-dom.development.js:86 Warning:
  // useEffect must not return anything besides a function,
  // which is used for clean-up." in the browser console.
  useEffect(async () => {});
  return (
    <>
      <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;
