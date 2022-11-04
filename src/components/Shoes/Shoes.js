import React from 'react';
import { add } from '../../utilities/utilities';

const Shoes = () => {
     const first = 12;
     const second = 24;
     const total = add(first, second);
     return (
          <div>
               <h3>Shoes are amazing</h3>
               <p> Shoes Total price : {total}</p>
          </div>
     );
};

export default Shoes;