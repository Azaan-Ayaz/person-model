import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiConsoleController } from "react-icons/gi";

const Header = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className='bg-gradient-to-r from-black to-gray-800 text-orange-500 md:p-6 w-full h-20 shadow-md flex items-center'>
        <div className='flex-shrink-0'>
          <div className='mx-1 gap-4 md:text-5xl flex font-orbitron'>
            <GiConsoleController /> Gaming Galleria
          </div>
        </div>
        <div className='flex ml-auto'>
          <ul className='flex gap-6 mx-3 w-full'>
            <li className='align-middle'>
              <Link
                to="/"
                className={`text-orange-500 hover:text-gray-300 font-semibold ${isCurrentPage('/') && 'border-b-[3px] border-orange-500'}`}
              >
                HOME
              </Link>
            </li>
            <li className='align-middle'>
              <Link
                to="/about"
                className={`text-orange-500 hover:text-gray-300 font-semibold ${isCurrentPage('/about') && 'border-b-[3px] border-orange-500'}`}
              >
                ABOUT
              </Link>
            </li>
            <li className='align-middle'>
              <Link
                to="/register"
                className={`text-orange-500 hover:text-gray-300 font-semibold ${isCurrentPage('/register') && 'border-b-[3px] border-orange-500'}`}
              >
                REGISTER
              </Link>
            </li>
            <li className='align-middle'>
              <Link
                to="/login"
                className={`text-orange-500 hover:text-gray-300 font-semibold ${isCurrentPage('/login') && 'border-b-[3px] border-orange-500'}`}
              >
                LOGIN
              </Link>
            </li>
            <li className='align-middle'>
              <Link
                to="/cart"
                className={`text-orange-500 hover:text-gray-300 font-semibold ${isCurrentPage('/cart') && 'border-b-[3px] border-orange-500'}`}
              >
                CART(0)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
