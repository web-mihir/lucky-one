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
   const [clearCard, setClearCard] = useState("");
   const [selectOne, setSelectOne] = useState([]);

   // Data fetch from local json file
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setAllTv(data))
   }, []);

   // Handler for add to cart items
   const handleAddToTvCart = (tv) => {
      const { id } = tv;
      const checkDuplicate = cart.some(item => {
         return item.id === id;
      });

      if (checkDuplicate) {
         window.alert("You have already added this item in cart");
         return;
      } else {
         const newCart = [...cart, tv];
         setCart(newCart)
      }
   }

   // Clear div
   const handleToClearCart = (divId) => {
      const clearDiv = document.getElementById(divId).innerHTML = "";
      setClearCard(clearDiv);
      window.location.reload();
   }

   // Select One function 
   const selectOneItem = (tvCarts) => {
      const randomSelect = tvCarts[Math.floor(Math.random() * tvCarts.length)];
      setSelectOne([randomSelect]);
   }

   return (
      <div id='tv_house' className='w-100 bg-light py-4'>
         <div className="container">
            <div className="row">
               <div className="col-lg-9">
                  <h5 className='text-start'>All Tv</h5>
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
               <div className="col-lg-3 cart_details" id='cart_details'>
                  <TvCart tv_cart={cart}
                     selectOneHandler={selectOneItem}
                     selctOneforMe={selectOne}
                     clearCartHandler={handleToClearCart}
                  ></TvCart>
               </div>
            </div>
         </div>

      </div>
   );
};

export default TvHouse;