import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(false);
  const showQuestion = () => {
    //console.log('Show');
    setShow(true);
  };
  const hideQuestion = () => {
    //console.log('Hide');
    setShow(false);
  };
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {show ? (
          <AiOutlineMinus className='btn' onClick={hideQuestion} />
        ) : (
          <AiOutlinePlus className='btn' onClick={showQuestion} />
        )}
      </header>
      <p>{show && info}</p>
    </article>
  );
};

export default Question;
