import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // either import useState or write React.useState
  // const [people, setPeople] = React.useState([]);
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    // my solution
    // const newPeople = [...people].filter((person) => person.id !== id);
    // instructor's solution
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        //console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* setPeople({}) as used will cause a problem. Need to use the arrow function to work. */}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
