import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  // Note that we pass an object {removePerson: removePerson}
  // using the new JS feature not to declare the value if the
  // value variable name matches the field name.
  return (
    <PersonContext.Provider value={{removePerson}}>
      <h3>prop drilling</h3>
      <List people={people}/>
    </PersonContext.Provider>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // useContext returns an object, which we destructure to 
  // be able to reference removePerson directly.
  const {removePerson} = useContext(PersonContext);
  console.log(removePerson);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
