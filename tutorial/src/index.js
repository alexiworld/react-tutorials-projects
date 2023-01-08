import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

//https://amazon.com/Best-Sellers-Books/zgbs/books/
const firstBook = {
  author: 'Colleen Hoover',
  title: 'It Ends with Us',
  img: './images/book.jpg',
};

const secondBook = {
  author: 'E2M Chef Connect, Jennie Casselman, Andres Chaparro',
  title: 'Eager 2 Cook, Healthy Recipes for Healthy Living: Beef & Poultry',
  img: 'https://images-na.ssl-images-amazon.com/images/I/612Ko7Ps0uL._AC_UL600_SR600,400_.jpg',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ author, img, title }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

//https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
