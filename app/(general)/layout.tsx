export default function GeneralLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <main className='flex flex-col items-center p-24'>
        <span className='text-lg'> Hola Mundo</span>
        {children}
      </main>
    </div>
  )
}
