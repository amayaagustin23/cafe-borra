/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import AppRoutes from './routes/route';
import './App.scss';
import CartContext from './context/cartContext';

function App() {
  const [countCart, setCountCart] = useState();
  const updateCount = (value) => {
    setCountCart({ ...countCart, count: value });
  };

  return (
    <CartContext.Provider value={{ countCart, updateCount }}>
      <AppRoutes />
    </CartContext.Provider>
  );
}

export default App;
