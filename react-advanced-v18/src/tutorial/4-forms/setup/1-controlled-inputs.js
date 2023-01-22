import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // no empty fields
      // In ES6 if the value variable name matches the field
      // name, the value could be skipped. For example:
      // person = {firstName: firstName, email: email};
      const person = { id: new Date().getTime().toString(), firstName, email };
      // For the id value, the developer can decide to use UIID library.
      setPeople((people) => [person, ...people]); // [...people, person]
      setFirstName('');
      setEmail('');
      console.log(person);
    } else {
      console.log('Empty values.');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* or define onClick attribute passing the handleSubmit fn */}
          <button type='submit'>add person</button>
        </form>
        {people.map((person /*, index*/) => {
          // you don't want to use index once you start
          // adding and removing items to the list
          const { id, firstName, email } = person;
          return (
            <div key={id}>
              <h4 className='item'>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
