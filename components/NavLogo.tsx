import Image from 'next/image'
import Link from 'next/link'

const NavLogo = () => {
  return (
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
  )
}

export default NavLogo
