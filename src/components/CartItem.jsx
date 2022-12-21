import React from 'react';
import { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { BrowserRouter, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {

  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <>
    <div className='flex py-2 gap-x-4 lg:px-6 border-b border-gray-200 font-light text-gray-500 w-full'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="" />
         </Link>         
         <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='uppercase max-w-[240px] text-primary text-sm font-medium hover:underline'>
              {title}
            </Link> 
            <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition'/></div>           
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center border h-full text-primary font-medium'>
              <div onClick={()=>{decreaseAmount(id)}} className='flex flex-1 justify-center items-center h-full cursor-pointer'><IoMdRemove/></div>
              <div className='flex justify-center items-center h-full px-2'>{amount}</div>
              <div onClick={()=>{increaseAmount(id)}} className='flex flex-1 justify-center items-center h-full cursor-pointer'><IoMdAdd/></div>
            </div>
            <div className='flex flex-1 justify-around items-center'>${price}</div>
            <div className='flex flex-1 justify-end items-center text-primary font-medium'>{`$${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
         </div>
      </div>
    </div>
    </>
  );
};

export default CartItem;
