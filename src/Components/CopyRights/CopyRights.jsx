import React from 'react'

function CopyRights() {
  return (
    <div className='w-full h-full bg-[#0E0E0E] py-3 text-white'>
    <div className='flex sm:space-x-3 items-center sm:font-font text-[12px] space-x-2 divide-x-2 sm:text-sm justify-center'>
    <button>DelipKumar &copy; 2024</button> 
    <button className='pl-2'>All rights reserved</button>
    <button className='hidden sm:block pl-2'>Terms and Conditions</button>
    </div>
</div>

  )
}

export default CopyRights