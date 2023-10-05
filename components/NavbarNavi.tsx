import { navItemList } from '@/constants'
import Link from 'next/link'

const NavbarNavi = () => {
  return (
    <div className=' items-center justify-center tablet:flex hidden '>
      <ul className='flex items-center justify-start '>
        {navItemList.map((linkItem, i) => (
          <Link key={i} href={linkItem.href} className='flex items-center justify-start'>
            <span className='flex items-center ms-3 me-0.5'>{linkItem.icon} </span>
            <p className='items-center'>{linkItem.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default NavbarNavi
