import React from 'react'
import Link from 'next/link'

const NavLink = ({href , title}) => {
  return (
    <Link
     href={href}
     className='block py-3 pl-4 pr-4 text-[#ADB7BE] text-xl font-bold rounded md:p-0 hover:text-white transition-colors duration-300 hover:scale-105 transform' >
     {title}
    </Link>
  )
}

export default NavLink