import Link from 'next/link'
import React from 'react'

export const Navlink = ({href,text}) => {
  return (
    <Link href={href}>
      <a className='text-white text-sm font-semibold hover:text-rose-300' href={href}>
        {text}
      </a>
    </Link>
  )
}
