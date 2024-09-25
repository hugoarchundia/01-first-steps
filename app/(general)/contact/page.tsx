import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Page',
  keywords: 'contact, page'
}

const ContactPage = () => {
  return (
    <>
      <span className='text-5xl'>Contact Page</span>
    </>
  )
}

export default ContactPage
