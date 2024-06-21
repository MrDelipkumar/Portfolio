import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoHomeOutline , IoPeopleOutline , IoPlanetOutline   } from "react-icons/io5";
import { MdOutlineContactMail , MdOutlinePhotoSizeSelectActual  } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
function Navbar() {
    const [ toggleMenu , setToggleMenu ] = useState (false);
    const closeMenu =() => setToggleMenu (false);
    const config = {
        social:{
          Github:'https://github.com/MrDelipkumar?tab=repositories',
        }
    }
  return (
    <div> 
        <div className='hidden xl:block'>
        <nav className='flex justify-between items-center px-5 pt-3'>
        <div className='font-Logo text-[20px] text-[#C92FFF] cursor-pointer'><Link to='Home'spy={true} smooth={true} offset={0} duration={800}>Delipkumar</Link></div>
        <div>
            <ul className='flex gap-5 font-semibold text-white uppercase'>
                <li className='cursor-pointer hover:text-[#C92FFF]'><Link to='Home' spy={true} smooth={true} offset={0} duration={800}>Home</Link></li>
                <li className='cursor-pointer hover:text-[#C92FFF]'><Link to='About' spy={true} smooth={true} offset={0} duration={800}>About Me</Link></li>
                <li className='cursor-pointer hover:text-[#C92FFF]'><Link to='Capability' spy={true} smooth={true} offset={0} duration={800}>Capability</Link></li>
                <li className='cursor-pointer hover:text-[#C92FFF]'><Link to='Projects' spy={true} smooth={true} offset={0} duration={800}>Projects</Link></li>
                <li className='cursor-pointer hover:text-[#C92FFF]'><Link to='Contact' spy={true} smooth={true} offset={0} duration={800}>Contact</Link></li>
            </ul>
        </div>
        <div className='font-semibold bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white rounded'><a className='flex justify-center items-center px-5 py-1' href={config.social.Github} target='_blank'>Git Hub</a></div>
        </nav>
        </div>
        <div className='block xl:hidden'>
        <div className='pt-2 pr-2 flex justify-end animate-pulse'>
                    <button onClick={()=> setToggleMenu(!toggleMenu)}><HiOutlineBars3BottomRight size={30}/></button>
                </div>
                </div>
        { toggleMenu &&<div className='block xl:hidden'>
            <nav className='flex justify-between'>
                <div className='top-0 absolute bg-gradient-to-r from-black to-black  w-9/12 sm:w-6/12 lg:w-5/12 h-full'>
                    <ul>
                        <h1 className='font-Logo text-[18px] text-[#C92FFF] pl-5 pt-6'>Delipkumar</h1>
                        <div className='pt-8 px-4'><hr className='border-pink-500'/></div>
                        <div className='pl-5 pt-8 font-medium'>
                        <div className='gap-3 w-full h-full flex items-center cursor-pointer'><div className='text-[#c92fff]'><IoHomeOutline size={20}/></div> <div><li><Link to='Home' spy={true} smooth={true} offset={0} duration={800}  onClick={closeMenu}>Home</Link></li></div></div>
                        <div className='gap-3 w-full h-full flex items-center pt-8 cursor-pointer'><div className='text-[#c92fff]'><IoPeopleOutline size={20}/></div> <div><li><Link to='About' spy={true} smooth={true} offset={0} duration={800}  onClick={closeMenu}>About Me</Link></li></div></div>
                        <div className='gap-3 w-full h-full flex items-center pt-8 cursor-pointer'><div className='text-[#c92fff]'><IoPlanetOutline  size={20}/></div> <div><li><Link to='Capability' spy={true} smooth={true} offset={0} duration={800}  onClick={closeMenu}>Capability</Link></li></div></div>
                        <div className='gap-3 w-full h-full flex items-center pt-8 cursor-pointer'><div className='text-[#c92fff]'><MdOutlinePhotoSizeSelectActual size={20}/></div><div><li><Link to='Projects' spy={true} smooth={true} offset={0} duration={800}  onClick={closeMenu}>Projects</Link></li></div></div>
                        <div className='gap-3 pt-8 w-full h-full flex items-center cursor-pointer'><div className='text-[#c92fff]'><MdOutlineContactMail size={20}/></div><div><li><Link to='Contact' spy={true} smooth={true} offset={0} duration={800}  onClick={closeMenu}>Contact</Link></li></div>
                        </div>
                        </div>
                        <div className='pt-10 px-5'><hr className='border-pink-500'/></div>    
                    </ul>
                    <button className='bg-[#C92FFF] w-[20px] h-[20px] top-0 absolute end-0 mt-[28px] mr-5 rounded' onClick={()=> setToggleMenu(false)}><IoMdClose size={25} className='flex justify-center items-center w-full h-full'/></button>  
                </div>
                </nav>
                </div>}
    </div>
  )
}
export default Navbar