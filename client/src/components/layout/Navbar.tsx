import { SearchBar } from './SearchBar';
import { CartIcon } from '../shared/CartIcon';
import { LoginButton } from '../shared/LoginButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 flex-col md:flex-row">
      <div className="flex w-full md:w-auto justify-between md:justify-start md:flex-1">
        <Link to="/" className="text-xl font-bold">
          Hawk-Products
        </Link>

        <button className="btn btn-ghost md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden w-full flex-col gap-4 pb-4`}>
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="flex justify-end gap-4">
          <LoginButton />
          <CartIcon />
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex md:flex-[2] justify-center px-4">
        <div className="w-full max-w-md">
          <SearchBar />
        </div>
      </div>

      <div className="hidden md:flex md:flex-1 justify-end gap-4">
        <CartIcon />
      </div>
    </div>
  );
};
