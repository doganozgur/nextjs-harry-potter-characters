import Footer from './footer'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className=' bg-gray-200'>
      <div className='min-h-screen max-w-3xl mx-auto px-3 py-10'>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}