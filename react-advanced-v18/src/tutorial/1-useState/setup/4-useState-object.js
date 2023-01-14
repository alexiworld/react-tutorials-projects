import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  //console.log(person);
  const changeMessage = () => {
    // next line will work but wipe out all other data
    // setPerson({message: 'new message'});

    // next lines won't work as react component will not be updated
    // person.message = 'new message';
    // setPerson(person);

    // what will work is creating a new object using the spread operator
    // to copy the fields from the old object, and override the message field.
    setPerson({ ...person, message: 'new message' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
