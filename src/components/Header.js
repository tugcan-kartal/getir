import React from 'react';
import {BiGlobe} from 'react-icons/bi';
import {RiUserFill,RiUserAddFill} from 'react-icons/ri';

function Header() {
  return (
    <div className='bg-brand-color'>
      <div className='container mx-auto h-11 flex items-center justify-between'>

        <a href='#'>
          <img src="https://cdn.getir.com/marketing/Getir_Logo_1621812382342.png" className='w-11 ml-4' />
        </a>

        <nav className='flex gap-x-8 text-sm font-semibold'>
          <a href='#' className='mr-8 flex items-center gap-x-2 text-white transition-all text-oppacity-80 hover:text-opacity-100'>
            <BiGlobe size={20} />
            Türkçe (TR)
          </a>
          <a href='#' className='mr-8 flex items-center gap-x-2 text-white transition-all text-oppacity-80 hover:text-opacity-100'>
            <RiUserFill size={20}/>
            Giriş Yap
          </a>
          <a href='#' className='mr-8 flex items-center gap-x-2 text-white transition-all text-oppacity-80 hover:text-opacity-100'>
           <RiUserFill size={20}/>
            Kayıt ol
          </a>
        </nav>

      </div>
    </div>
  )
}

export default Header