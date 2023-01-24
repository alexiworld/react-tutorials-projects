import React from 'react';

const Product = ({image, name, price}) => {
  // Cannot read properties of undefined because one of
  // the images is undefined. This will not be the case
  // when the price is undefined, where an empty string
  // will be rendered.
  return 
  (<article className='product'>
    <img src={image.url} alt={name}></img>
    <h4>{name}</h4>
    <p>{price}</p>
    </article>);
};

export default Product;
 