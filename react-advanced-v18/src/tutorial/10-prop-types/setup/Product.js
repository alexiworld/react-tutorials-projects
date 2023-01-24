import React from 'react';
import PropTypes from 'prop-types';
import DefaultImage from '../../../default-image.jpg'

const Product = ({image, name, price}) => {
  // Cannot read properties of undefined because one of
  // the images is undefined. This will not be the case
  // when the price is undefined, where an empty string
  // will be rendered.
  console.log(image, name, price);
  return 
  (<article className='product'>
    <img src={image.url} alt={name}></img>
    <h4>{name}</h4>
    <p>{price}</p>
    </article>);
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
};

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: DefaultImage
}
export default Product;
 