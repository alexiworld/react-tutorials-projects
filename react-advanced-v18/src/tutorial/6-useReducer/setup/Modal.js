import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal}) => {
  useEffect(() => {
    let timer = setTimeout(() => { closeModal(); }, 3000);
    return () => {
      clearTimeout(timer);
    }
  })
  return <div className='modal'>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
