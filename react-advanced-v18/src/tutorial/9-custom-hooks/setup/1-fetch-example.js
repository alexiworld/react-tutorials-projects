 import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// Create custom hook is like creating a reusable code. For
// example, you can call useFetch in many places with different
// URLs and get different loading state indicator and products.

const Example = () => {
  const {loading, products} = useFetch(url);
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 
          products.map((product) => {
            return (<>
            <div key={product.id}>
              <h4>{product.fields.name}</h4>
            </div>
            </>);
          })
        }</h2>
    </div>
  )
}

export default Example
