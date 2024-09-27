'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css'

interface ActiveLinkProps {
  path: string
  text: string
}

const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Link
      href={path}
      className={`${style.link} ${pathname === path && style['active-link']}`}
    >
      {text}
    </Link>
  )
}

export default ActiveLink
