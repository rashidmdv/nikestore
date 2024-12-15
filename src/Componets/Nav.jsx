import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants";
import Button from "./Button";

export const navItems =(isOpen)=>{
  return(
    navLinks.map((item)=>(
      <li key={item.label}>
        <a href={item.href} className={`font-montserrat leading-normal text-lg ${ isOpen && 'text-white'} lg:text-slate-gray hover:text-coral-red`}>{item.label}</a>
      </li>
    ))
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-8 absolute max-xl:relative z-10 w-full">
      <nav className="padding-x flex justify-between items-center max-container max-lg:flex-wrap">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex items-center justify-center gap-16 max-lg:hidden">

          {navItems(isOpen)}

        </ul>
        <div className="hidden max-lg:block" onClick={toggleMenu}>
          <img src={hamburger} alt="" width={25} height={25} />
        </div>

      </nav>
       {/* {
        isOpen && (
          <ul className="flex flex-col gap-5 lg:hidden bg-white mt-5 py-5 padding-x">

          {navItems()}

          </ul>
        )
       } */}

        {
          isOpen && (
            <div className="fixed top-0 right-0 bottom-0 left-32 bg-black lg:hidden z-50">
              <button onClick={toggleMenu} className="text-white text-3xl absolute top-5 right-10">x</button>
              <ul className="flex flex-col gap-5 mt-20 ml-5">

              {navItems(isOpen)}

              </ul>
           </div>
          )
        }
    </header>
  );
};

export default Nav;
