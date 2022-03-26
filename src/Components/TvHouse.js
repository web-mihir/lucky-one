import React, { useEffect, useState } from 'react';
import TvComp from './TvComp';
import TvCart from './TvCart';

const TvHouse = () => {
   const [allTv, setAllTv] = useState([]);
   const [cart, setCart] = useState([]);
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
         window.alert("You have already added this item in the cart");
         return;
      } else {
         const newCart = [...cart, tv];
         if (newCart.length > 4) {
            alert("Can't select more than 4 items!");
            return;
         } else {
            setCart(newCart);
         }
      }
   }

   // Clear div
   const handleToClearCart = () => {
      setCart([]);
      setSelectOne([]);
   }

   // Select One function 
   const selectOneItem = (tvCarts) => {
      const randomSelect = tvCarts[Math.floor(Math.random() * tvCarts.length)];
      setSelectOne([randomSelect]);
   }

   return (
      <section id='tv_house' className='w-100 bg-light py-4'>
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
                     selectOneForMe={selectOne}
                     clearCartHandler={handleToClearCart}
                  ></TvCart>
               </div>
            </div>
         </div>

      </section>
   );
};

export default TvHouse;