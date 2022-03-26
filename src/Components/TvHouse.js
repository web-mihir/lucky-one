import React, { useEffect, useState } from 'react';
import TvComp from './TvComp';

const TvHouse = () => {
   const [allTv, setAllTv] = useState([]);
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setAllTv(data))
   }, []);
   return (
      <div id='tv_house' className='w-100 bg-secondary py-4'>
         {
            allTv.map(tv => {
               const { id, name, price, image } = tv;
               return (
                  <TvComp id={id} name={name} price={price} image={image}></TvComp>)
            })
         }
      </div>
   );
};

export default TvHouse;