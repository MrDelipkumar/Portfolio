import React from 'react'
import 'animate.css';
import Html from '../Assets/Html.png';
import css from '../Assets/css.png';
import Javascript from '../Assets/Javascript.png';
import Tailwind from '../Assets/Tailwind.png';
import Reactjs from '../Assets/Reactjs.png';
import Urban from '../Assets/urban.png'
import Corefitness from '../Assets/corefitness.png';
function Project() {
  const config = {
    website:{
      Corefitness : 'https://core-fitness-peach.vercel.app/',
      Urban : 'https://urban-app-steel.vercel.app/'
    }
  }
  return (
    <div id='Projects' className='bg-[#0e0e0e] h-full w-full text-white'>
      <div className='flex justify-center pt-10'>
        <h1 className='uppercase font-Logo text-[22px] text-[#C92FFF]'>Projects</h1>
      </div>
      <div className='sm:py-[100px] py-[50px]'>
        <div className='xl:flex xl:flex-row flex flex-col xl:justify-center items-center xl:gap-[50px] 2xl:gap-[200px] px-5'>
          <div className='rounded-[10px] relative group overflow-y-hidden'>
            <div className='sm:w-[600px] sm:h-[300px] w-[280px] h-[160px] group'><img className='h-[160px] w-[280px] sm:w-[600px] sm:h-[300px] rounded-[10px]' src={Corefitness} alt="Corefitness" /></div>
              <div><span className='translate-y-[100%] group-hover:translate-y-[0] group-hover:transition-all group-hover:duration-700 duration-700 absolute top-0 flex flex-col w-full sm:h-[302px] h-[176px] rounded-[10px] bg-black/70 items-center justify-center py-3'>
              <h1 className='text-[12px] sm:text-sm font-bold bg-gradient-to-r from-purple-500 via-pink-500 bg-yellow-500 bg-clip-text text-transparent'>Core Fitnesss</h1>
              <h2 className='font-semibold pt-5 text-[12px] sm:text-sm'>Introducing Core Fitness, my custom-<br/>built landing page for a gym website.</h2>
              <a href={config.website.Corefitness} target='_blank' className=' px-3 py-1 mt-5 font-bold text-[10px] sm:text-sm bg-[#C92FFF] text-black rounded-[10px]'>View Project</a>
              </span>
              </div>
          </div>
          <div>
            <div className='sm:w-[500px] w-[300px]'>
            <h1 className='text-center text-[11px] font-bold xl:pt-0 pt-5 bg-gradient-to-r from-purple-500 via-pink-500 bg-yellow-500 bg-clip-text text-transparent sm:text-[20px]'>Core Fitness Gym Website</h1>
            <h2 className='pt-5 text-justify text-[12px] sm:text-base'>Introducing Core Fitness, my custom-built landing page for a gym website. This project leverages HTML, CSS, JavaScript, Tailwind CSS, and ReactJS
               to create a responsive and interactive user experience. The site is SEO-optimized and designed for fast performance. Explore my portfolio to see more of my work and 
               expertise in web development.</h2>
            </div>
            <div className='pt-5'>
              <h1 className='font-semibold text-[#C92FFF] text-[12px] sm:text-base'>Technology used</h1>
              <div className='flex items-center gap-4 pt-5'>
              <div><img className='w-[50px] h-[50px]' src={Html} alt="Html" /></div>
              <div><img className='w-[40px] h-[50px]' src={css} alt="css" /></div>
              <div><img className='w-[50px] h-[56px]' src={Javascript} alt="Javascript" /></div>
              <div><img className='w-[60px] h-[30px]' src={Tailwind} alt="Tailwind" /></div>
              <div><img className='w-[50px] h-[50px]' src={Reactjs} alt="Reactjs" /></div>
              </div>
            </div>
          </div>
        </div>
    <div className='xl:flex xl:flex-row flex flex-col xl:justify-center items-center xl:gap-[50px] 2xl:gap-[200px] sm:pt-[100px] pt-[50px] px-5'>
      <div className='hidden xl:block'>
            <div className='sm:w-[500px]'>
            <h1 className='text-center text-[20px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 bg-yellow-500 bg-clip-text text-transparent'>Urban Beauty Salon Website</h1>
            <h2 className='pt-5 text-justify'>Check out Urban Beauty Salon, a dynamic website I built using ReactJS. This project highlights my expertise in creating responsive designs, seamless
               navigation, and interactive components. The site features dynamic links and is optimized for SEO to attract more clients. Explore my portfolio for more examples of my
               web development skills.</h2>
            </div>
            <div className='pt-5'>
              <h1 className='font-semibold text-[#C92FFF]'>Technology used</h1>
              <div className='flex items-center gap-4 pt-5'>
              <div><img className='w-[50px] h-[50px]' src={Html} alt="Html" /></div>
              <div><img className='w-[40px] h-[50px]' src={css} alt="css" /></div>
              <div><img className='w-[50px] h-[56px]' src={Javascript} alt="Javascript" /></div>
              <div><img className='w-[60px] h-[30px]' src={Tailwind} alt="Tailwind" /></div>
              <div><img className='w-[50px] h-[50px]' src={Reactjs} alt="Reactjs" /></div>
              </div>
            </div>
          </div>
          <div className='rounded-[10px] relative group overflow-y-hidden'>
            <div className='sm:w-[600px] sm:h-[300px] w-[280px] h-[160px] group'><img className='h-[160px] w-[280px] sm:w-[600px] sm:h-[300px] rounded-[10px]' src={Urban} alt="Urban" /></div>
              <div><span className=' translate-y-[100%] group-hover:translate-y-[0] group-hover:transition-all group-hover:duration-700 duration-700 absolute top-0 flex flex-col w-full sm:h-[302px] h-[176px] rounded-[10px] bg-black/70 items-center justify-center py-3'>
              <h1 className='text-[10px] sm:text-sm font-bold bg-gradient-to-r from-purple-500 via-pink-500 bg-yellow-500 bg-clip-text text-transparent'>Urban Beauty Salon</h1>
              <h2 className='font-semibold pt-5 text-[8px] sm:text-sm sm:w-[320px] w-[180px] text-justify'>A dynamic website I built using ReactJS. This project highlights my expertise in creating responsive designs, seamless navigation, and interactive components.</h2>
              <a href={config.website.Urban} target='_blank' className=' px-3 py-1 mt-5 font-bold text-[8px] sm:text-sm bg-[#C92FFF] text-black rounded-[10px]'>View Project</a>
              </span>
              </div>
             </div> 
             <div className='block xl:hidden'>
            <div className='sm:w-[500px] w-[300px]'>
            <h1 className='text-center pt-5 sm:text-[20px] text-[11px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 bg-yellow-500 bg-clip-text text-transparent'>Urban Beauty Salon Website</h1>
            <h2 className='pt-5 text-justify text-[10px] sm:text-base'>Check out Urban Beauty Salon, a dynamic website I built using ReactJS. This project highlights my expertise in creating responsive designs, seamless
               navigation, and interactive components. The site features dynamic links and is optimized for SEO to attract more clients. Explore my portfolio for more examples of my web development
               skills.</h2>
            </div>
            <div className='pt-5'>
              <h1 className='font-semibold text-[#C92FFF] text-[12px] sm:text-base'>Technology used</h1>
              <div className='flex items-center gap-4 pt-5'>
              <div><img className='w-[50px] h-[50px]' src={Html} alt="Html" /></div>
              <div><img className='w-[40px] h-[50px]' src={css} alt="css" /></div>
              <div><img className='w-[50px] h-[56px]' src={Javascript} alt="Javascript" /></div>
              <div><img className='w-[60px] h-[30px]' src={Tailwind} alt="Tailwind" /></div>
              <div><img className='w-[50px] h-[50px]' src={Reactjs} alt="Reactjs" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project