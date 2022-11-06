// use local storage to manage cart data 
const addToDb = (id) => {
     let shoppingCart = {};
     // get shopping cart  from local storage 
     const storedcart = localStorage.getItem('shopping-cart');
     if (storedcart) {
          shoppingCart = JSON.parse(storedcart);
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
const removeFromDb = id => {
     const storedCart = localStorage.getItem('shopping-cart');
     if (storedCart) {
          const shoppingCart = JSON.parse(storedCart);
          if (id in shoppingCart) {
               delete shoppingCart[id];
               localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
          }
     }
}

const deleteShoppingCart = () => {
     localStorage.removeItem('shopping-cart');
}

export {
     addToDb,
     removeFromDb,
     deleteShoppingCart
}


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
