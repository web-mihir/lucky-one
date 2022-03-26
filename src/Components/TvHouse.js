import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TvComp from './TvComp';
import TvCart from './TvCart';
// import e24i from '../Assets/images/e24i-g4.jpg';
// import m22f from '../Assets/images/m22f.jpg';
// import m24f from '../Assets/images/m24f.jpg';
// import p19v from '../Assets/images/p19v-g4-1.jpg';
// import P204v from '../Assets/images/P204v.jpg';
// import p24v from '../Assets/images/p24v-g4-01.jpg';
// import v22 from '../Assets/images/v22-1.jpg';


const TvHouse = () => {
   const [allTv, setAllTv] = useState([]);
   const [cart, setCart] = useState([]);
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setAllTv(data))
   }, []);

   const handleAddToTvCart = (tv) => {
      const newCart = [...cart, tv];
      setCart(newCart);
   }

   return (
      <div id='tv_house' className='w-100 bg-secondary py-4'>
         <div className="container">
            <div className="row">
               <div className="col-lg-9">
                  <div className="row">
                     {
                        allTv.map(tv => {
                           const { id, name, price, image } = tv;
                           return (
                              <div className="col-lg-4 col-sm-12" key={id}>
                                 <TvComp tv={tv}
                                  id={id}
                                    name={name}
                                    price={price}
                                    image={image}
                                    handleClick={handleAddToTvCart}></TvComp>
                              </div>
                           )
                        })
                     }
                  </div>
               </div>
               <div className="col-lg-3">
                  {
                     cart.map(crt => {

                        return (
                           <TvCart tv_cart={crt}></TvCart>
                        )
                     })
                  }
               </div>
            </div>
         </div>

      </div>
   );
};

export default TvHouse;