import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const TvComp = (props) => {
   return (
      <div className='tv_components card my-3 shadow px-4' style={{ width: "18rem" }}>
         <img src={require(`../Assets/images/${props.image}`)} alt="" />
         <div className="card-body">
            <h5 className='card-title my-3'>{props.name}</h5>
            <span>Price: {props.price} BDT</span>
            <button className='btn btn-primary btn-sm mt-3' onClick={() => {props.handleClick(props.tv)}}>
               Add To Cart 
               <FontAwesomeIcon className='ms-2' icon={faCartPlus} />
            </button>
         </div>
      </div>
   );
};

export default TvComp;