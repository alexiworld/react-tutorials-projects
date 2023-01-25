import { useState, useEffect } from 'react';

// To be custom hook, the function must start with 'use'
export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }
  
    useEffect(() => {
      getProducts()
    }, [url, getProducts])
    return {loading, products}
};
