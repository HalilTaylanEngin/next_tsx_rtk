import React from 'react'
import { FaRegUser } from 'react-icons/fa';


//redux
import { useDispatch } from 'react-redux'
import { openDropdown } from '@/redux/slices/navDropdownSlice'

const AccountButton = () => {

  const dispatch = useDispatch()

  return (
    <button onClick={()=> dispatch(openDropdown()) } className='text-xl mx-2 ' ><FaRegUser /> </button>
  )
}

export default AccountButton