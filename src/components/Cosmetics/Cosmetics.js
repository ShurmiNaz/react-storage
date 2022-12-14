import React, { useEffect, useState } from 'react';

import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {
     const [cosmetics, setCosmetics] = useState([]);
     useEffect(() => {
          fetch('fakeData.json')
               .then(res => res.json())
               .then(data => setCosmetics(data))
     }, [])
     return (
          <div >
               <h2>this is cosmetics section</h2>
               <h4> Cosmetics number : {cosmetics.length}</h4>
               <div className="cosmetics">
                    {cosmetics.map(cosmetic => <Cosmetic
                         key={cosmetic.id}
                         cosmetic={cosmetic}
                    ></Cosmetic>)}
               </div>

          </div>
     );
};

export default Cosmetics;