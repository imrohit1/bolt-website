"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AppConfig } from '@/config';
import { useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className="bg-gray-800 text-white p-4 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-xl font-bold">
        {AppConfig.brandName}
      </Link>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav className={`md:flex items-center ${isMobileMenuOpen ? 'flex' : 'hidden' } md:block`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              className="hover:text-gray-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              Products
            </button>
            {isDropdownOpen && (
              <motion.ul
                className="absolute left-0 mt-2 bg-white text-gray-800 rounded shadow-md z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">
                  Products Overview
                </Link>
                {AppConfig.products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.id}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
          </li>
          {session ? (
            <li className="relative">
              <button
                className="hover:text-gray-300 focus:outline-none"
                onClick={toggleUserDropdown}
              >
                {session.user?.name || 'User'}
              </button>
              {isUserDropdownOpen && (
                <motion.ul
                  className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-md z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <li >
                    <button
                      onClick={handleSignOut}
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                      Sign Out
                    </button>
                  </li>
                </motion.ul>
              )}
            </li>
          ) : (
            <li>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
