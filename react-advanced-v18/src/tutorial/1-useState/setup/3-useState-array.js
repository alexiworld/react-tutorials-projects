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

    // changed it to use the latest state value - people, in fact
    // there is no need of this style here but some people may find
    // it safer and preferable for use in all cases.
    setPeople((people) => {
      let newPeople = people.filter((person) => person.id !== id);
      return newPeople;
    });
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
