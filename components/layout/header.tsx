'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href : string) => {
    setActiveLink(href);
    if (mobileMenuOpen) setMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black bg-opacity-90 backdrop-blur-md shadow-md'
          : 'bg-black bg-opacity-30' 
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between max-w-7xl px-6 sm:px-8 lg:px-12"
        aria-label="Top"
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://vibesandvent.vercel.app/static/media/logo4.66c94c42009ed159651f.png"
              alt="Vibes & Vent Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium ${
                activeLink === item.href
                  ? 'text-white'
                  : 'text-white hover:text-[#f37c20]'
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.name}
              {activeLink === item.href && (
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-[#f37c20]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* "Find a Therapist" Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-[#f37c20] text-black hover:bg-[#00b5af] transition-colors px-3 py-0.5 rounded-md mx-4 text-sm"
            id="nav-btn"
          >
            <Link href="/find-therapist">Find a Therapist</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 shadow-md md:hidden">
            <div className="space-y-1 px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-base font-medium ${
                    activeLink === item.href
                      ? 'text-[#f37c20]'
                      : 'text-white hover:text-[#f37c20]'
                  }`}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full bg-[#f37c20] text-black hover:bg-[#00b5af] mt-4">
                <Link href="/find-therapist">Find a Therapist</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
