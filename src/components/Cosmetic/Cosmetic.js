import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakeDb';
import './Cosmetic.css';

const Cosmetic = (props) => {
     const { id, name, company, price } = props.cosmetic;
     const addToCard = (id) => {
          // localStorage.setItem(id, 1);
          addToDb(id);
     };
     const removeFromCart = (id) => {
          removeFromDb(id)
     };
     // console.log(props)
     return (
          <div className="cosmetic">
               <h1>single cosmetic sector</h1>
               <h2> Name : {name}</h2>
               <p>Price : {price}</p>
               <p> Company Name : {company}</p>
               <h6> ID : {id}</h6>
               <button onClick={() => addToCard(id)}>Add To Cart</button>
               <button onClick={() => removeFromCart(id)}>Remove from cart</button>
          </div>
     );
};

export default Cosmetic;