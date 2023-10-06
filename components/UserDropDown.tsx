'use client'

import React from 'react'
import Link from 'next/link'
import { accountItemList, navItemList } from '@/constants'
import { AiOutlineUserSwitch } from 'react-icons/ai'

const UserDropDown = () => {
  return (
    <div className='p-2 group relative '>
      <div className='dropdown inline-block w-auto'>
        <button className=' font-semibold py-2 px-4 rounded inline-flex items-center'>
          <span className='flex  items-center justif-center text-2xl'>
            <AiOutlineUserSwitch />
          </span>
        </button>
        <div className='  dark:bg-slate-900  dark:text-slate-300 bg-slate-300  text-slate-800 pt-4 px-2  rounded-md   dropdown-menu  w-48 right-0 h-auto  absolute hidden group-hover:block '>
          {accountItemList.map((item, i) => (
            <Link
              className='hover:text-slate-50 dark:border-slate-300 border-slate-900 flex items-center  justify-start h-8  border rounded-md p-2 mb-4 my-2'
              key={i}
              href={item.href}
            >
              <span className='flex items-center mr-2'>{item.icon} </span>
              <p>{item.title} </p>
            </Link>
          ))}
          <hr />
          {navItemList.map((item, i) => (
            <Link
              className='hover:text-slate-50  flex items-center justify-start h-8 w-full  p-2 my-2'
              key={i}
              href={item.href}
            >
              <span className='flex items-center mr-2'>{item.icon} </span>
              <p>{item.title} </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserDropDown
