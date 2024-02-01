// BasketContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  // Load basket data from localStorage on initial render
  const initialBasket = JSON.parse(localStorage.getItem('basket')) || [];
  const [basket, setBasket] = useState(initialBasket);

  // Save basket data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
