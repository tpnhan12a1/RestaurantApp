import React from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import {motion} from "framer-motion"
import Logo from './img/logo.png'
import Avatar from './img/avatar.png'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/*destop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">

        <Link to={'./'} className="flex items-center gap-2">
          <img src={Logo} className ="w-8 object-cover" alt="Logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

       <div className="flex items-center gap-8">

        <ul className ="flex items-center gap-8">
            <li className ="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Home</li>
            <li className ="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Menu</li>
            <li className ="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">About Us</li>
            <li className ="text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer">Service</li>
          </ul>

          <div className ="relative flex items-center cursor-pointer">
            <MdShoppingBasket className ="text-textColor text-2xl"/>
            <div className ="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg">
              <p className=" text-sm text-white font-semibold text-2 flex justify-center items-center ">2</p>
            </div>
          </div>
          <motion.img whileTap={{scale:0.6}}
            src= {Avatar} alt="user profile" className=" w-10 min-w-[40px] min-h-[40px] shadow-2xl cursor-pointer"
            />
       </div>

      </div>
      {/*mobie*/}
      <div className="flex md:hidden h-full"></div>
    </header>
  )
};
export default Header;