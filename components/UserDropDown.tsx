'use client'

import React from 'react'
import Link from 'next/link'
import NavLogo from './NavLogo'
import { accountItemList, navItemList } from '@/constants'
import { AiOutlineClose } from 'react-icons/ai'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { closeDropdown } from '@/redux/slices/navDropdownSlice'
import { RootState } from '@/redux/store'

const UserDropDown = () => {
  const dispatch = useDispatch()
  const dropDown = useSelector((state: RootState) => state.navDropdown.value)

  return (
    <div
      onClick={() => dispatch(closeDropdown())}
      onMouseLeave={() => dispatch(closeDropdown())}
      className={` absolute top-8 -right-2  w-48 h-auto  dark:bg-slate-900 bg-slate-300  p-3   rounded-md+ ${
        ' ' + dropDown
      }`}
    >
      <div className='flex item-center justify-between h-20 py-8   '>
        <AiOutlineClose />
        <NavLogo />
      </div>
      <ul className='flex flex-col items-start justify-start '>
        {accountItemList.map((linkItem, i) => (
          <Link
            key={i}
            href={linkItem.href}
            className='border rounded-md  w-full my-1 p-2 gap-2 flex items-center justify-start'
          >
            <span className='flex items-center '>{linkItem.icon} </span>
            <p className='items-center'>{linkItem.title}</p>
          </Link>
        ))}
      </ul>

      <ul className='flex flex-col items-start justify-start '>
        {navItemList.map((linkItem, i) => (
          <Link
            key={i}
            href={linkItem.href}
            className='py-2 gap-2 flex items-center justify-start '
          >
            <span className='flex items-center '>{linkItem.icon} </span>
            <p className='items-center'>{linkItem.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default UserDropDown
