import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'
import Image from 'next/image'

//icons
import { AiOutlineCodepen } from 'react-icons/ai'
import { MdConnectWithoutContact } from 'react-icons/md'
import { SiInformatica } from 'react-icons/si'

const Navbar = () => {
  return (
    <div className='dark:bg-slate-800 bg-slate-200 px-12  flex items-center justify-between h-16 w-full'>
      <div className='flex items-center justify-center gap-1'>
        <Link href='/' className='flex items-center justify-start'>
          <Image
            priority={true}
            src='/logo.png'
            alt='logo'
            width={20}
            height={20}
            className='w-auto h-auto rounded-full'
          />
          <p className='p-1 whitespace-nowrap'>B-EXP</p>
        </Link>
      </div>
      <div className='flex items-center justify-center'>
        <ul className='flex items-center justify-start '  >
          {navItemList.map((linkItem, i) => (
            <Link key={i} href={linkItem.href} className='flex items-center justify-start'>
              <span className='flex items-center ms-3 me-0.5'>{linkItem.icon} </span>
              <p className='items-center'>{linkItem.title}</p>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex'>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Navbar

const navItemList = [
  {
    title: 'About',
    icon: <SiInformatica />,
    href: 'about'
  },
  {
    title: 'Products',
    icon: <AiOutlineCodepen />,
    href: 'products'
  },
  {
    title: 'Contact',
    icon: <MdConnectWithoutContact />,
    href: 'contact'
  }
]
