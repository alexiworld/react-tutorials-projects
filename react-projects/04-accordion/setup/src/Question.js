import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  return (
    <article>
      <h4>{title}</h4>
      <AiOutlinePlus />
      <p>{info}</p>
    </article>
  );
};

export default Question;
