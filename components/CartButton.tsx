import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartButton = () => {
  return (
    <Link href='cart' className='flex items-center justify-start me-0.5 tablet:me-2'>
      <div className='flex items-center justify-center relative '>
        <div className='flex item-center justify-start h-full w-full text-2xl '>
          <AiOutlineShoppingCart />
        </div>
        <div className='absolute top-0 -right-2 w-[60%] h-[60%] flex item-center justify-center  bg-amber-700 text-slate-200 p-0.5 rounded-full '>
          <span className='text-[9px] flex items-center justify-center p-0.5'>7</span>
        </div>
      </div>
    </Link>
  )
}

export default CartButton
