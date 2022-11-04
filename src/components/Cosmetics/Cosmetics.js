import React from 'react';
import { add, multiply } from '../../utilities/utilities';

const Cosmetics = () => {
     const first = 12;
     const second = 24;
     const sum = add(first, second);
     const multiValue = multiply(first, second)
     return (
          <div>
               <h2>this is cosmetics section</h2>
               <p> sum of cosmetics : {sum}</p>
               <h5> Cosmetice multiply value : {multiValue}</h5>
          </div>
     );
};

export default Cosmetics;