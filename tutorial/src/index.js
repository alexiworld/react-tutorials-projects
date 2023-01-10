import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

// // Spreads
// const friends = ['john', 'peter', 'anna'];
// const newFriends = [...friends, 'susan'];
// console.log(friends);
// console.log(newFriends);
// const someObject = {
//   name: 'john',
//   job: 'developer',
// };
// const newObject = { ...someObject, location: 'florida' };
// console.log(someObject);
// console.log(newObject);

//https://amazon.com/Best-Sellers-Books/zgbs/books/
const books = [
  {
    author: 'Colleen Hoover',
    title: 'It Ends with Us',
    img: './images/book.jpg',
    id: 1,
  },
  {
    author: 'E2M Chef Connect, Jennie Casselman, Andres Chaparro',
    title: 'Eager 2 Cook, Healthy Recipes for Healthy Living: Beef & Poultry',
    img: 'https://images-na.ssl-images-amazon.com/images/I/612Ko7Ps0uL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('click me')}>click me</button>
    </section>
  );
};

// children is a special property
const Book = ({ author, img, title, children }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

//https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
