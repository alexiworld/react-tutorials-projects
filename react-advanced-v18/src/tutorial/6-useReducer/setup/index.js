import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  console.log(state, action);
  // YOU ALWAYS WANT TO RETURN SOME STATE IF YOU WANT
  // YOUR FUNCTIONALITY TO WORK!!! 
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {...state, 
      people: newPeople, 
      isModalOpen: true, 
      modalContent: 'item added'
    };
  };
  if (action.type === 'NO_VALUE') {
    return {...state, 
      isModalOpen: true, 
      modalContent: 'please enter value'
    };
  }
  //return state;
  throw new Error('no matching action type');
}
const defaultState = {
  people: [],
  isModalOpen: false, 
  modalContent: 'hello world'
}
const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {id: new Date().getTime().toString(), name};
      // only need to pass the property type to the dispatch fn
      dispatch({type: 'ADD_ITEM', payload: newItem});
      setName('');
    } else {
      dispatch({type: 'NO_VALUE'}); 
    }
  }
  return <>
  {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
  <form onSubmit={handleSubmit}>
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <button type='submit'>add</button>
  </form>
  {state.people.map((person)=> {
    return (
      <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    );
  })}
  </>;
};

export default Index;
