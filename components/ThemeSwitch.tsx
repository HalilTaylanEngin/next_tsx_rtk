'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div
        onClick={() => handleClick()}
        className="w-9 h-5 bg-gray-800 peer-focus:outline-none  rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-100 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"
      ></div>
    </label>
  )
}

export default ThemeSwitch
