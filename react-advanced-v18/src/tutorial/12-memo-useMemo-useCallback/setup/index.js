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

  // Added cart functionality, and every time we add a product,
  // this will trigger a re-render of Index component, and this
  // will cause a new addToCart to be created, and this will 
  // cause BigList to be re-rendered as well because this time 
  // the new parameter addToCart changes. So React.memo() does
  // not help.
  // What is the solution??
  // The solution is to use 'useCallback' now. It will recreate
  // the function if the value has changed; otherwise, not.
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart+1);
  }, [cart]); // only when we update the cart value

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{marginTop: '3rem'}}>cart: {cart}</h1>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

// The solution to the problem with "the btn click causing re-rendering"
// can be solved by using React.memo() fn. The function checks if the
// parameters (in this case the value of products) have changed and if so 
// (and only so) it triggers the re-render of the BigList component.
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('BigList called.');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return (<SingleProduct 
        key={product.id} 
        {...product}
        addToCart={addToCart}></SingleProduct>
      );})}
    </section>
  )
});

const SingleProduct = ({ fields, addToCart }) => {
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
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
