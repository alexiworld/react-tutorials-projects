import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false, msg: '', type:''});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // TODO: display alert
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      // deal with edit
      setList(list.map((item) => {
        if (item.id == editID) {
          return {...item, title:name}
        }
        return item;
      }));
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      // show alert
      showAlert(true, 'success', 'item added to the list');
      const newItem = {id: new Date().getTime().toString(), 
        title: name};
      setList([...list, newItem]);
      setName('');
    }
  }

  // Using ES6 feature to declare default values
  const showAlert = (show=false, type='', msg='') => {
    // Using ES6 shortcut feature to declare the object
    // equivalent to {show: show, type: type, msg: msg} 
    // console.log(new Date(), 'Alert: ', {show, type, msg});
    setAlert({show, type, msg});
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && 
      <Alert {...alert} removeAlert={showAlert} list={list}/>}
    <h3>grocery bud</h3>
    <div className='form-control'>
      <input type='text' className='grocery' 
        placeholder='eg. eggs' value={name} 
        onChange={(e) => setName(e.target.value)}/>
      <button className='submit-btn' type='submit'>
        {isEditing?'edit':'submit'}</button>
    </div>
    </form>
    {list.length > 0 && (
    <div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className='clear-btn' onClick={clearList}>
        clear items
      </button>
    </div>)}
  </section>
}

export default App
