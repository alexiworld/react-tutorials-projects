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
    };

    // React Hook useEffect has a missing dependency: 'getProducts'.
    // Either include it or remove the dependency array react-hook/
    // exhaustive-deps.
    //
    // Adding getProducts to the array with variables, which
    // value change will trigger re-run of the useEffect fn
    // WILL CREATE an INFINITE LOOP. To work-around this new
    // issue we could wrap getProducts in a useCallback.
    useEffect(() => {
      getProducts()
    }, [url, getProducts])
    return {loading, products}
};
