// src\components\Navbar.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-custom1`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // Scroll to top of the page
          }}
        >
          {/*
            object-contain: A utility class in Tailwind CSS
            The image will be scaled to fit the container perfectly while maintaining its original aspect ratio 
            */}
          <img src={logo} alt="logo" className='w-10 h-10 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Haitian
            <span className='sm:block hidden'>&nbsp;| Full-Stack Developer</span>
          </p>
        </Link>
        {/* 
          Navbar other tags 
          
          map elements in navLinks array to <a> tags.
          navLinks is in '/constants/index.js'
          */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`
                ${active === link.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick = {() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* For looking performance on smaller mobile devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] cursor-pointer object-contain'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className={`
          ${!toggle ? "hidden" : "flex"}
          p-6 black-gradient absolute top-36 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
        `}>
          <ul className='list-none flex flex-col  justify-end items-start gap-4'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`
                ${active === link.title ? "text-white" : "text-secondary"}
                font-poppins font-medium cursor-pointer text-[16px]
              `}
              onClick = {() => {
                setToggle(!toggle) // Close the menu after clicking on a link
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar