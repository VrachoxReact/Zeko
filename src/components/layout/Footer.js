// src/components/layout/Footer.js
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Zeko Rent Logo"
              width={40}
              height={40}
            />
            <p className="mt-2">© 2024 Zeko Rent. All rights reserved.</p>
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
