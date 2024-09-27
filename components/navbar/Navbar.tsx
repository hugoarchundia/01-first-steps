import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'

const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

const navItems = [
  {
    path: '/',
    text: 'About'
  },
  {
    path: '/pricing',
    text: 'Pricing'
  },
  {
    path: '/contact',
    text: 'Contact'
  }
]

const Navbar = async () => {
  await temporalAsync()

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link
        href='/'
        className='flex items-center'
      >
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>
      <div className='flex flex-1'></div>
      {navItems.map((item) => {
        return (
          <Link
            key={item.path}
            href={item.path}
            className='text-white hover:text-blue-200 p-2'
          >
            {item.text}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
