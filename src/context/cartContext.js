import { createContext } from 'react';

const cartContext = createContext({
  count: null,
  listCart: []
});

export default cartContext;
