import React, { Suspense } from 'react'
import { SiSpacemacs } from "react-icons/si";
const Home  = React.lazy(() => import ('./Pages/Home'));
const About  = React.lazy(() => import ('./Pages/About'));
const Slider  = React.lazy(() => import ('./Components/Slider/slider'));
const Project  = React.lazy(() => import ('./Pages/Project'));
const Contact  = React.lazy(() => import ('./Pages/Contact'));
function App() {
  return (
    <div>
      <Suspense
      fallback={
        <div className='w-full h-screen flex flex-col justify-center items-center gap-1'>
          <div className='text-[#C92FFF] animate-spin'><SiSpacemacs size={20}/></div>
          <h1 className=' font-semibold'>Loading...</h1>
      </div>}>
        <Home/>
        <About/>
        <Slider/>
        <Project/>
        <Contact/>
      </Suspense>
    </div>
  )
}
export default App