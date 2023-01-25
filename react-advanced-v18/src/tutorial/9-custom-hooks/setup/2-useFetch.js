import { useState, useEffect } from 'react';

// To be custom hook, the function must start with 'use'
export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = useCallback(async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }, [url]);

    // The instructor is saying we should be seeing the following
    // error:
    // "React Hook useEffect has a missing dependency: 'getProducts'.
    // Either include it or remove the dependency array react-hook/
    // exhaustive-deps."
    // , in the shell console.
    //
    // To address the above error, getProducts must be added to the 
    // array with variables (2nd parameter of useEffect), but this
    // code change will trigger re-run of the useEffect wrapped fn
    // WILL CREATE an INFINITE LOOP. 
    // The instructor is saying that after this change useEffect
    // will call getProducts(), which will setProducts(), this will
    // change the products state value and trigger a re-render (can
    // assume he is speaking about Index component), which will call
    // useFetch, which will cause useEffect's wrapped function to be 
    // called again, which will call getProducts again, which will 
    // setProducts and change the products state value. This will 
    // trigger a re-render and it will create an infinite loop.
    //
    // To work-around this new issue we could wrap getProducts 
    // in a useCallback. The useCallback will let the wrapped 
    // fn to be recreated only if the url (see useCallback 2nd 
    // param) changes.
    useEffect(() => {
      getProducts()
    }, [url, getProducts])
    return {loading, products}
};
