import Link from 'next/link'

const Home = () => {
  return (
    <main className='flex flex-col items-center p-24'>
      <span className='text-5xl'>Hola Mundo</span>
      <Link href='/about'> About Page </Link>
    </main>
  )
}

export default Home
