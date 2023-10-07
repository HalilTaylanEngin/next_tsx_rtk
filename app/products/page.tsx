import PrudoctCard from '@/components/PrudoctCard'
import { productList } from '@/constants/data'
import React from 'react'

const Products = () => {
  return (
    <div className='flex   dark:bg-slate-800 bg-slate-200  min-h-screen  '>
      <div className='flex gap-4 items-center flex-wrap justify-center  m-2 p-2 rounded-md '>
        {productList.map(product => (
          <PrudoctCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
