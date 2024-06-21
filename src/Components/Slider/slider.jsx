import React from 'react'
import Figma from '../../Assets/Figma.png';
import Html from '../../Assets/Html.png';
import css from '../../Assets/css.png';
import Javascript from '../../Assets/Javascript.png';
import Tailwind from '../../Assets/Tailwind.png';
import Reactjs from '../../Assets/Reactjs.png';
import Github from '../../Assets/Github.png';
function slider() {
  return (
    <div id='Capability' className=' bg-[#0e0e0e] w-full h-full py-[10px]'>
        <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 sm:h-[100px] h-[50px]'>
            <div className='mx-auto my-auto flex overflow-hidden w-full sm:h-[100px] h-[50px]'>
            <div className='flex items-center 2xl:space-x-[150px] 2xl:pl-[180px] animation space-x-[100px] pl-[104px] '>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[80px] h-[40px] w-[40px]' src={Figma} alt="Figma"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[80px] h-[40px] w-[40px]' src={Html} alt="Html"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[60px] sm:h-[80px] h-[40px] w-[30px]' src={css} alt="css"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[90px] h-[45px] w-[40px]' src={Javascript} alt="Javascript"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[100px] sm:h-[50px] h-[25px] w-[50px]' src={Tailwind} alt="Tailwind"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[80px] h-[40px] w-[40px]' src={Reactjs} alt="Reactjs"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[100px] sm:h-[100px] h-[50px] w-[50px]' src={Github} alt="Github"/></div>
            </div>
            <div className='flex items-center 2xl:space-x-[150px] 2xl:pl-[180px] animation space-x-[100px] pl-[104px] '>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[80px] h-[40px] w-[40px]' src={Figma} alt="Figma"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[80px] h-[40px] w-[40px]' src={Html} alt="Html"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[60px] sm:h-[80px] h-[40px] w-[30px]' src={css} alt="css"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[90px] h-[45px] w-[40px]' src={Javascript} alt="Javascript"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[100px] sm:h-[50px] h-[25px] w-[50px]' src={Tailwind} alt="Tailwind"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[80px] sm:h-[80px] h-[40px] w-[40px]' src={Reactjs} alt="Reactjs"/></div>
            <div className='sm:h-[100px] sm:w-[100px] w-[50px] h-[50px] flex justify-center items-center'><img className='sm:w-[100px] sm:h-[100px] h-[50px] w-[50px]' src={Github} alt="Github"/></div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default slider