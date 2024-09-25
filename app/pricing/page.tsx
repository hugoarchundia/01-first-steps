import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing Page',
  keywords: 'pricing, page'
}
const PricingPage = () => {
  return (
    <>
      <span className='text-5xl'>Pricing Page</span>
    </>
  )
}

export default PricingPage
