import Link from 'next/link'
import { FaBookOpen, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-base-200 text-base-content mt-auto'>
      <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:pl-20'>

        {/* Brand Section */}
        <div>
          <Link href='/' className='flex items-center gap-2 text-primary font-bold text-xl mb-3'>
            <FaBookOpen />
            BorrowBooks
          </Link>
          <p className='text-sm text-gray-500'>
            Your digital library experience. Explore, borrow,<br/> and enjoy thousands of books online.
          </p>
          {/* Social Links */}
          <div className='flex gap-4 mt-4 text-xl'>
            <a href='#' className='hover:text-primary transition'><FaFacebook /></a>
            <a href='#' className='hover:text-primary transition'><FaTwitter /></a>
            <a href='#' className='hover:text-primary transition'><FaInstagram /></a>
            <a href='#' className='hover:text-primary transition'><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='font-bold text-lg mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li><Link href='/' className='hover:text-primary transition'>Home</Link></li>
            <li><Link href='/all-books' className='hover:text-primary transition'>All Books</Link></li>
            <li><Link href='/profile' className='hover:text-primary transition'>My Profile</Link></li>
            <li><Link href='/login' className='hover:text-primary transition'>Login</Link></li>
            <li><Link href='/register' className='hover:text-primary transition'>Register</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className='font-bold text-lg mb-3'>Contact Us</h3>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center gap-2'>
              <MdEmail className='text-primary' />
              <span>support@borrowbooks.com</span>
            </li>
            <li className='flex items-center gap-2'>
              <MdPhone className='text-primary' />
              <span>+880 01723-000000</span>
            </li>
            <li className='flex items-center gap-2'>
              <MdLocationOn className='text-primary' />
              <span>123 Nilkhet, Book City,Dhaka</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='border-t border-base-300 text-center py-4 text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} BorrowBooks. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer