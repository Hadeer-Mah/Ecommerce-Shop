import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg'

const Header = () => {
  const [isActive, setisActive] = useState(false)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
   window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setisActive(true) : setisActive(false);
   })
  })
  
  return (
    <>
    <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed z-10 w-full transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to='/'>
        <div>
          <img className='w-[40px]' src={logo} alt="" />
        </div>
      </Link>
      <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 w-[18px] h-[18px] text-[12px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
          </div>
      </div>
      </div>
    </header>
    </>
  );
};

export default Header;
