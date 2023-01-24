import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer
// Where using the context makes sense is when there are
// more than 2-3 nested levels of components. In this case
// removePerson is fine but passing people via the context
// does not add much value.

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
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Context API / useContext</h3>
      <List/>
    </PersonContext.Provider>
  );
};

const List = () => {
  // you can destructure the object by replacing mainData
  // with const { people } = useContext(PersonContext);
  // and then use people.map directly.s 
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
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
