// const products = [
//   { id: "h-1", name: "Hoodie 1" },
//   { id: "h-2", name: "Hoodie 2" },
//   { id: "h-3", name: "Hoodie 3" },
//   { id: "s-1", name: "Sneakers 1" },
//   { id: "s-2", name: "Sneakers 2" },
//   { id: "s-3", name: "Sneakers 3" },
//   { id: "s-4", name: "Sneakers 4" },
//   { id: "p-1", name: "Pants 1" },
//   { id: "p-2", name: "Pants 2" },
//   { id: "p-3", name: "Pants 3" }
// ];

import tabs from './tabs.json';
 


const data = tabs
console.log(data);

export const getProducts = () => {
  return tabs;
};

export const getProductById = (productId) => {
  return tabs.find((product) => product.id === productId);
};