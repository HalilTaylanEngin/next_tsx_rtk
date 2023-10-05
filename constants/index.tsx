
//icons
import { AiOutlineCodepen,AiOutlineLogin,AiOutlineUserAdd } from 'react-icons/ai'
import { MdConnectWithoutContact } from 'react-icons/md'
import { SiInformatica } from 'react-icons/si'


export const navItemList = [
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


  
  export const accountItemList = [
    {
      title: 'Login',
      icon: <AiOutlineLogin />,
      href: 'login'
    },
    {
      title: 'Register',
      icon: <AiOutlineUserAdd />,
      href: 'register'
    },
  ]