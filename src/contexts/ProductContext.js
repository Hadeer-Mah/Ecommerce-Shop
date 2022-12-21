import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async ()=> {
      const {data} = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    fetchProducts();
  }, [])
  
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
