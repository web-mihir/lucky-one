import React from 'react';

const TvCart = (props) => {
   const { id, name, price, image } = props.tv_cart;
   return (
      <div className='tv_cart'>
         <h5 className='text-start'>Selected Tv</h5>
         <p className='bg-dark text-light p-2'>{name}</p>
         
      </div>
   );
};

export default TvCart;