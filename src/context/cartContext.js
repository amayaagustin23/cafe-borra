import { createContext } from 'react';

const cartContext = createContext({
  count: 0,
  listCart: []
});

export default cartContext;
