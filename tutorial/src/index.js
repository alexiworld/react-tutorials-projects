import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

//https://amazon.com/Best-Sellers-Books/zgbs/books/

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

//https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg

const Image = () => <img src='./images/book.jpg' alt='It Ends with Us' />;
const Title = () => <h2>It Ends with Us</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Colleen Hoover</h4>;
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
