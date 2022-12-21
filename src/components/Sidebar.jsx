import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi'
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {isOpen, handleClose}  = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
  
  return (
    <>
    <div className={`${isOpen? 'right-0': '-right-full'} w-full h-full fixed top-0 bg-white md:w-[35vw] xl:max-w-[30vw] shadow-2xl
    transition-all duration-300 px-4 lg:px-[35px] z-20`}>
      <div className='flex justify-between items-center border-b py-6'>
        <div className='font-semibold uppercase text-sm'>shopping bag ({itemAmount})</div>
        <div className='w-8 h-8 flex justify-center items-center cursor-pointer' onClick={handleClose}>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[250px] lg:h-[300px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='w-full flex justify-between items-center'>
          <div className='uppercase font-semibold'><span className='mr-2'>Total:</span> ${parseFloat(total).toFixed(2)}</div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-rose-500 w-12 h-12 text-white text-xl flex justify-center items-center'>
            <FiTrash2/>
          </div>
        </div>
        <Link to='/' className='flex justify-center items-center bg-gray-200 p-2 w-full text-primary font-medium'>View cart</Link>
        <Link to='/' className='flex justify-center items-center bg-primary p-2 w-full text-white font-medium'>Checkout</Link>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
