import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
  keywords: 'about, page'
}

const AboutPage = () => {
  return (
    <>
      <span className='text-5xl'>About Page</span>
    </>
  )
}

export default AboutPage
