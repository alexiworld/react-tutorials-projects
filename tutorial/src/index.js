import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

//https://amazon.com/Best-Sellers-Books/zgbs/books/
const author = 'Colleen Hoover';
const title = 'It Ends with Us';
const img = './images/book.jpg';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {console.log(props)}
    </article>
  );
};

//https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
