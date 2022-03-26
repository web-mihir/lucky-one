import React from 'react';

const TvCart = (props) => {
   return (
      <div className='tv_cart'>
         <h5 className='text-start py-5'>Selected Tv</h5>
         {
            props.tv_cart.map(crt => {
               const { id, name } = crt;
               return (
                  <p className='bg-light text-dark rounded shadow p-2' key={id}>{name}</p>
               )
            })
         }
         <div className="d-flex flex-column">
            <button className='btn btn-info btn-sm my-3'>SELECT ONE FOR ME</button>
            <button className='btn btn-danger btn-sm'>SELECT AGAIN</button>
         </div>
      </div>
   );
};

export default TvCart;