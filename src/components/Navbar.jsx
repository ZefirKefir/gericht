import React, { useState } from 'react';
import tw from 'twin.macro';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../constants/images';
import NavListItem from './NavListItem';
import MobileNavListItem from './MobileNavListItem';

const Nav = tw.nav`
  flex
  justify-between
  items-center
`;
const Logo = tw.img`
  block
  max-w-[150px]
`;
const NavList = tw.ul`
  hidden
  large:flex
  gap-8
`;
const Buttons = tw.div`
  hidden
  sm:flex
  gap-4
  items-center
`;
const Button = tw.a`
  text-white
  font-semibold
  hover:border-b-[1.5px]
  hover:border-golden-100
  focus:border-b-[2px]
  focus:border-golden-100
  focus:outline-none
  duration-100
`;
const Line = tw.div`
  w-px
  h-8
  bg-gray-500
`;

const Hamburger = tw.div`
  text-white
  cursor-pointer
  block
  large:hidden
`;
const MobileMenu = tw.div`
  w-full h-[100vh]
  absolute inset-0
  flex justify-center items-center
  bg-black-100
  origin-top
  transition-transform ease-in-out
  duration-300
`;
const MobileNavList = tw.ul`
text-white
  font-fancy
  text-3xl
  flex flex-col
  gap-8
`;
const CloseBurger = tw.button`
  absolute
  top-6 right-6
  text-golden-100
`;

const Navbar = () => {
  const [mobileVisible, setMobileVisible] = useState(false);
  let temp = mobileVisible ? '1' : '0';

  return (
    <Nav>
      <Logo src={images.gericht} alt='logo' />
      <NavList>
        <NavListItem label='home' />
        <NavListItem label='about' />
        <NavListItem label='menu' />
        <NavListItem label='blog' />
        <NavListItem label='landing' />
      </NavList>
      <Buttons>
        <Button href='#login'>Log in / Registration</Button>
        <Line />
        <Button href='#book'>Book a table</Button>
      </Buttons>
      <Hamburger>
        <GiHamburgerMenu size={28} onClick={() => setMobileVisible(true)} />
      </Hamburger>
      {/* mobile */}
      <MobileMenu style={{ transform: `scaleY(${temp})` }}>
        <CloseBurger>
          <MdOutlineRestaurantMenu size={28} onClick={() => setMobileVisible(false)} />
        </CloseBurger>
        <MobileNavList>
          <MobileNavListItem label='home' />
          <MobileNavListItem label='about' />
          <MobileNavListItem label='menu' />
          <MobileNavListItem label='awards' />
          <MobileNavListItem label='contact' />
        </MobileNavList>
      </MobileMenu>
    </Nav>
  )
}

export default Navbar;