// use local storage to manage cart data 
const addToDb = (id) => {
     let shoppingCart;
     // get shopping cart
     const storedcart = localStorage.getItem('shopping-cart');
     if (storedcart) {
          shoppingCart = JSON.parse(storedcart);
     }
     else {
          shoppingCart = {};
     }


     //add quantity
     const quantity = shoppingCart[id];
     if (quantity) {
          const newQuantity = quantity + 1;
          shoppingCart[id] = newQuantity;
     }
     else {
          shoppingCart[id] = 1;
     }
     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
export { addToDb };


// const addToDb = (id) => {
//      const quantity = localStorage.getItem(id);
//      if (quantity) {
//           console.log('have all ready');
//           const newQuantity = parseInt(quantity) + 1;
//           localStorage.setItem(id, newQuantity);

//      }
//      else {
//           localStorage.setItem(id, 1);
//      }

//      // localStorage.setItem(id, 1)
// };
