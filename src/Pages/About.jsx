import React from 'react'
import Delip from '../Assets/Delip.jpg'
function About() {
  return (
    <div id='About' className='bg-[#0e0e0e] w-full h-full text-white'>
        <div className='w-full h-full flex justify-center items-center py-[80px]'>
            <div className='xl:w-[1100px] xl:h-[600px] lg:w-[900px] lg:h-[500px] sm:w-[600px] sm:h-[900px] w-[320px] h-[700px] bg-[#0e0e0e] rounded-[10px] effect'>
                <div className='flex flex-col-reverse items-center py-[40px] sm:flex sm:flex-col-reverse sm:py-[50px] sm:items-center lg:flex lg:flex-row lg:w-full lg:h-full lg:justify-center lg:items-center lg:gap-[80px]'>
                <div className='xl:w-[600px] lg:w-[400px] sm:w-[500px] w-[250px] text-justify space-y-[30px]'>
                    <div><h3 className='text-center font-bold text-[#C92FFF] sm:text-[24px] lg:pt-0 pt-10'>So, who am I ?</h3></div>
                    <div><h1 className='text-[12px] sm:text-base lg:text-[15px] xl:text-base'><span className='font-bold text-pink-500'>Passionate Frontend Developer :</span> I am a dedicated frontend developer with a strong passion for creating visually stunning and user-friendly web applications.</h1></div>
                    <div><h2 className='text-[12px] sm:text-base lg:text-[15px] xl:text-base'><span className='font-bold text-pink-500'>Skilled in Modern Technologies :</span> Proficient in HTML, CSS, JavaScript, and frameworks like React and Vue.js</h2></div>
                    <div><h3 className='text-[12px] sm:text-base lg:text-[15px] xl:text-base'><span className='font-bold text-pink-500'>Detail-Oriented Designer :</span> With a keen eye for detail and a commitment to quality, I focus on writing clean, maintainable code that adheres to best practices and industry standards.</h3></div>
                </div>
                    <div><img className='sm:w-[300px] sm:h-[400px] w-[200px] h-[250px] rounded-[10px]' src={Delip} alt="Delip" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About
