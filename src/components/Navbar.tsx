
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Provider View", path: "/provider" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-strk-teal to-strk-purple flex items-center justify-center">
                <span className="text-white font-bold text-sm">Sx</span>
              </div>
              <span className="ml-2 text-xl font-bold text-strk-purple-dark">STRK Schedule</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-strk-gray-dark hover:text-strk-teal-dark transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-4 bg-strk-teal hover:bg-strk-teal-dark transition-colors">
              Connect Wallet
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-strk-gray-dark hover:text-strk-teal-dark hover:bg-strk-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-strk-teal"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out border-b",
          isOpen ? "max-h-64 border-opacity-100" : "max-h-0 border-opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-strk-gray-dark hover:text-strk-teal-dark hover:bg-strk-gray"
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full bg-strk-teal hover:bg-strk-teal-dark transition-colors my-2">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
