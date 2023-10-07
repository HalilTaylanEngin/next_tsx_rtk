import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const PrudoctCard = ({ product }: any) => {
  return (
    <div className='relative group  transition-all ease-in-out duration-500  bg-white dark:text-slate-800 flex flex-col items-center justify-between w-72 h-96 shadow-lg rounded-md overflow-hidden '>
      <div className='absolute  transition-all ease-in-out duration-500 opacity-90  hidden group-hover:flex  items-center justify-center t-0 l-0 w-full h-full bg-slate-900'>
        <div className='flex items-center gap-4 '>
          <div className='flex  text-slate-200 transition-all ease-in-out duration-500  items-center font-extrabold text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2'>
            <AiOutlineShoppingCart />
          </div>
          <div className='flex text-slate-200 transition-all ease-in-out duration-500  items-center font-extrabold text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2'>
            <AiOutlineSearch />
          </div>
          <div className='flex text-slate-200  transition-all ease-in-out duration-500  items-center font-extrabold text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2'>
            <AiOutlineHeart />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center p-4  w-full h-56 '>
        <Image
          src={product.image}
          alt='prd'
          width={240}
          height={240}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='flex items-center justify-center mt-4  w-full h-8 '>
        <p className=' p-2'>{product.title} </p>
      </div>
      <div className='flex  items-end justify-between p-4 w-full h-auto '>
        <p className='flex gap-1 items-center font-bold '>{product.price} $ </p>
        <p className='flex gap-1 items-center font-bold text-gray-800'>
          {product.rating.rate}
          <AiFillStar />
        </p>
      </div>
    </div>
  )
}

export default PrudoctCard
