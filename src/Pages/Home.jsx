import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { FaAngleDoubleDown } from "react-icons/fa";
import Linkedin from '../Assets/Linkedin.png'
import Mail from'../Assets/Mail.png'
import Github from'../Assets/Github.png'
import background from '../Assets/background.mp4'
function Home() {
  const config = {
    social:{
      Mail:'mailto:Delipkumarkumar2002@outlook.com',
      Github:'https://github.com/MrDelipkumar?tab=repositories',
    }
  }
  return (
    <div id='Home' className=' bg-[#0e0e0e] w-full h-full text-white'>
  <div>
        <video className='w-full h-screen object-cover object-center' src={background}  autoPlay loop muted/>
        <div className='flex justify-center absolute sm:top-[95%] top-[94%] items-center w-full animate-bounce'><FaAngleDoubleDown size={35}/></div>
      <div className=' absolute top-0 w-full h-screen'>
      <div><Navbar/></div>
      <div className='sm:h-[90%] h-[83%] flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center px-5 py-5'>
      <h1 className="font-Logo sm:text-[40px] bg-gradient-to-r from-purple-500 via-pink-500 bg-yellow-500 bg-clip-text text-transparent">Hi , I am Delipkumar</h1>
      <h1 className='font-bold sm:text-[28px] pt-5 text-[#C92FFF]'>Frontend Developer</h1>
      <p className='sm:text-[26px] font-medium text-[15px] pt-5 text-center'>This is My official Portfolio website to showes all <br/>
      Details and  web development</p>
      <div className='flex items-center gap-5 sm:pt-10 pt-5'>
      <div className='bg-white rounded'><a href={config.social.Mail} target='_blank'><img className=' sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]' src={Mail} alt="Mail"/></a></div>
      <div><a href="#"><img className='sm:w-[40px] sm:h-[40px] w-[33px] h-[33px]' src={Linkedin} alt="Linkedin"/></a></div>
      <div className='bg-white rounded'><a href={config.social.Github} target='_blank'><img className=' sm:w-[38px] sm:h-[38px] w-[30px] h-[30px]' src={Github} alt="Github"/></a></div>
      </div>
      </div> 
      </div>  
      </div> 
     </div>
    </div>
  )
}
export default Home