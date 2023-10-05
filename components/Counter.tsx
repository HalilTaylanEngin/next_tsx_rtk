'use client'

import React from 'react'
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
/* import { decrement, increment } from '../redux/slices/navDropdownSlice' */

export function Counter() {
/*   const count = useSelector((state: RootState) => state.counter.value) */
  const dispatch = useDispatch()

  return (
    <div className='hidden' >
      <div>
        <button
          className='border-0 rounded-sm  p-4  bg-slate-600'
          aria-label='Increment value'
          /* onClick={() => dispatch(increment())} */
        >
          Increment
        </button>
        {/* <span className='text-3xl font-bold underline mx-8 '>{count}</span> */}
        <button
          className='border-0 rounded-sm  p-4  bg-slate-600'
          aria-label='Decrement value'
       /*    onClick={() => dispatch(decrement())} */
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
