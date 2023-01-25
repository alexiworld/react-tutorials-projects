import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10); // this is not 10 colors
      // for tints and 10 colors for shades. it means 100/10 = 10 colors
      // for each of the category. in other words, all(20) is 100/20 = 5
      // colors for tints and 5 colors for shades.
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }

  }
  return (
    <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={color} 
        onChange={(e) => setColor(e.target.value)}
        placeholder='#f15025'
        className={`${error?'error':''}`}/>
        <button className='btn' type='submit'>submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index) => {
        console.log(color);
        return (
          <SingleColor key={index} {...color} 
          index={index} hexColor={color.hex}/>
        );
      })}
    </section>
    </>
  );
}

export default App
