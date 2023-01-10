// According to John Smilga importing images (stored under src
// in our case) is faster than loading images from public (see
// public/images folder).

import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';
import img3 from './images/book-3.jpg';

export const books = [
  {
    author: 'Colleen Hoover',
    title: 'It Ends with Us',
    img: img1,
    id: 1,
  },
  {
    author: 'E2M Chef Connect, Jennie Casselman, Andres Chaparro',
    title: 'Eager 2 Cook, Healthy Recipes for Healthy Living: Beef & Poultry',
    img: img2,
    id: 2,
  },
  {
    author: 'Jennette McCurdy',
    title: "I'm Saddened that My Mom Died",
    img: img3,
    id: 3,
  },
];
