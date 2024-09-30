// src/components/layout/Header.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import useMenu from "../../hooks/useMenu";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="flex items-center space-x-2">
            <Image
              src="https://via.placeholder.com/40"
              alt="Zeko Rent Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">Zeko Rent</span>
          </a>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="hover:text-primary">Home</a>
          </Link>
          <Link href="#services" legacyBehavior>
            <a className="hover:text-primary">Services</a>
          </Link>
          <Link href="#about" legacyBehavior>
            <a className="hover:text-primary">About</a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a className="hover:text-primary">Contact</a>
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link href="/" legacyBehavior>
              <a className="hover:text-primary">Home</a>
            </Link>
            <Link href="#services" legacyBehavior>
              <a className="hover:text-primary">Services</a>
            </Link>
            <Link href="#about" legacyBehavior>
              <a className="hover:text-primary">About</a>
            </Link>
            <Link href="#contact" legacyBehavior>
              <a className="hover:text-primary">Contact</a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
