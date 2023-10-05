'use client'
//comps
import CartButton from './CartButton'
import AccountButton from './AccountButton'
import ThemeSwitch from './ThemeSwitch'
import UserDropDown from './UserDropDown'
import NavLogo from './NavLogo'
import NavbarNavi from './NavbarNavi'

const Navbar = () => {
  return (
    <div className='dark:bg-slate-900 bg-slate-300 px-2 tablet:px-12 text-sm  flex items-center justify-between h-16 w-full'>
      <NavLogo />
      <NavbarNavi />
      <div className='flex items-center  justify-end relative'>
        <CartButton />
        <AccountButton />
        <ThemeSwitch />
        <UserDropDown />
      </div>
    </div>
  )
}

export default Navbar
