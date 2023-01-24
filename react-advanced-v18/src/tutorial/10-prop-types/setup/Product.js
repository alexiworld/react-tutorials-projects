import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  // Cannot read properties of undefined because one of
  // the images is undefined. This will not be the case
  // when the price is undefined, where an empty string
  // will be rendered.
  console.log(image, name, price);
  // Work around the error that may occur if used <img
  // src={image.url || defaultImage} ...> by introducing
  // url constant. If the image is not there, the code
  // is not checking url field of undefined image object.
  const url = image && image.url;
  return (
  <article className='product'>
    <img src={ url || defaultImage} alt={name}></img>
    <h4>{name}</h4>
    <p>{price || 3.99}</p>
    </article>);
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// }

export default Product;
 