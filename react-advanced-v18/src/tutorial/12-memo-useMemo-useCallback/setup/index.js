import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
// So, the problem we observe here is that every click on the button
// leads to increase of the count BUT ALSO to rerender of the big
// list and therefore each single product.

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  )
}

// The solution to the problem with "the btn click causing re-rendering"
// can be solved by using React.memo() fn. The function checks if the
// parameters (in this case the value of products) have changed and if so 
// (and only so) it triggers the re-render of the BigList component.
const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log('BigList called.');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    console.log('SingleProduct called.');
  });
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  )
}
export default Index
