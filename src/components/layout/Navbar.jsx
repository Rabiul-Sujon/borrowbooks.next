"use client";

import Link from "next/link";
import { useSession, signOut } from '@/lib/client'
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const { data: session, isPending } = useSession();

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <FaBookOpen />
          BorrowBooks
        </Link>
      </div>

      {/* Center - Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-semi-bold px-1 gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>
      </div> 

      {/* Right - Auth Buttons */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session ? (
          <>
            <span className="font-medium hidden sm:block">
              {session.user.name}
            </span>
            <button
              onClick={() => signOut()}
              className="btn btn-error btn-sm text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary btn-md px-6 text-white text-lg">
            Login
          </Link>
        )}

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-books">All Books</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;