"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-4 sm:px-3.5 md:px-5 lg:px-28 py-6 fixed top-0 left-0 right-0 z-50 bg-background shadow-lg">
      <div className="noise" />
      <div className="flex items-center justify-between max-w-full">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          Nuclear
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/#features" className="text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors">
            Features
          </Link>
          <Link href="/pricing#pricing" className="text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors">
            Contact 
          </Link>
          <Link href="https://dev.nuclearapp.ca" target="_blank" className="text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors">
            Devlog
          </Link>
        </div>
        
        {/* Desktop Sign Up Button */}
        <div className="hidden lg:block">
          <Link href="/waitlist" className="bg-[#BF77F7] text-[#110C0C] px-4 py-2 text-lg font-bold rounded-2xl hover:shadow-xl transition-all duration-300 shadow-lg">
            Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors mr-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-background shadow-lg border-t border-gray-800 w-full`}>
        <div className="noise" />
        <div className="px-4 py-6 space-y-4 max-w-full">
          <Link 
            href="#features" 
            className="block text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors py-2 w-full"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="block text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors py-2 w-full"
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link 
            href="/contact" 
            className="block text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors py-2 w-full"
            onClick={closeMenu}
          >
            Contact 
          </Link>
          <Link 
            href="https://dev.nuclearapp.ca" 
            target="_blank" 
            className="block text-[#EEEEEEB3] hover:text-[#EEEEEE] transition-colors py-2 w-full"
            onClick={closeMenu}
          >
            Devlog
          </Link>
          <div className="pt-4 border-t border-gray-800">
            <Link 
              href="/waitlist" 
              className="inline-block bg-[#BF77F7] text-[#110C0C] px-6 py-3 text-lg font-bold rounded-2xl hover:shadow-xl transition-all duration-300 shadow-lg"
              onClick={closeMenu}
            >
              Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
