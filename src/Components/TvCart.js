import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TvCart = (props) => {
   return (
      <div className='tv_cart'>
         <h5 className='text-start py-5'>Selected Tv</h5>
         <div id='tv_card_item_box'>
            {
               props.tv_cart.map(crt => {
                  const { id, name } = crt;
                  return (
                     <div className='bg-light text-dark rounded shadow p-2 my-1 d-flex align-items-center justify-content-center' key={id}>
                        <p>{name}</p>
                        <button className='btn btn-sm px-3'>
                           <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                     </div>
                  )
               })
            }
         </div>
         {
            props.selctOneforMe.map(item => {
               const { id, name } = item;
               return (
                  <div className='border' key={id}>
                     <h6 className='mt-5 text-success'>Best TV For You</h6>
                     <p className='bg-light text-dark rounded shadow-lg p-2 cart_item'>{name}</p>
                  </div>
               )
            })
         }
         <div className="d-flex flex-column">
            <button className='btn btn-info btn-sm my-3' onClick={() => props.selectOneHandler(props.tv_cart)}>SELECT ONE FOR ME</button>
            <button className='btn btn-danger btn-sm' onClick={props.clearCartHandler}>SELECT AGAIN</button>
         </div>
      </div>
   );
};

export default TvCart;