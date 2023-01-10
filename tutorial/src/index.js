import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';
// The { books } method can be used when there are multiple objects
// to export from a module. There can be only one default per module,
// and Book is an example how default works. Note you don't need to
// match the exported name. You can write "import Banana from './Book"
// and sill gonna work. This is NOT THE CASE with NON-default name
// like { books } in our example. The name MUST match exactly the
// exported name to be able to import it.
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
