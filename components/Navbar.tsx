
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, LogIn } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-12 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-slate-950 font-bold text-xl">T</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">
            TradePay <span className="text-blue-400">Global</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${location.pathname === link.path ? 'text-blue-500' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4 pl-4 border-l border-slate-800">
            <Link 
              to="/signin" 
              className="text-sm font-bold text-slate-300 hover:text-white flex items-center"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm flex items-center group transition-transform hover:scale-105"
            >
              Sign Up
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-slate-800 p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium py-2 border-b border-slate-800/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <Link 
              to="/signin" 
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-center border border-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
