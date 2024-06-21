import axios from 'axios';
import React, { useState } from 'react'
import CopyRights from '../Components/CopyRights/CopyRights';
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMOLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        const data ={
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
          }
        }
        try{
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch(error){
            console.log(error);
        }
    }
  return (
    <div id='Contact'>
    <div className='bg-[#0e0e0e] w-full h-full py-[120px] sm:py-[230px]'>
        <div className='w-full h-full flex justify-center items-center'>
        <form onSubmit={handlesubmit} className='sm:w-[500px] sm:h-[500px] w-[300px] h-[400px] mx-5 rounded-[15px] contact-effect-mobile sm:contact-effect'>
            <div className='flex flex-col gap-3 w-full h-full justify-center'>
            <div className='uppercase text-center text-[18px] font-bold text-[#C92FFF]'><h1>get in touch</h1></div>
            <div className='text-center text-[14px] sm:text-[18px] text-white'>Let's talk on something great together</div>
            <div className='px-10 pt-5'><input className=' w-full h-full sm:py-2 text-[12px] sm:text-base py-[3px] rounded pl-3 outline-none' type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required /></div>
            <div className='px-10'><input className=' w-full h-full sm:py-2 py-[3px] text-[12px] sm:text-base rounded pl-3 outline-none' type="email" placeholder='Your Email id' value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
            <div className='px-10'><textarea className=' w-full sm:h-[200px] h-[100px] text-[12px] sm:text-base rounded pl-3 outline-none' placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea></div>
            <div className='flex justify-center'><button className=' bg-[#C92FFF] px-3 py-1 rounded text-black font-semibold'>Sumbit</button></div>
            </div>
        </form>
        </div>
    </div>
    <CopyRights/>
    </div>
  )
}
export default Contact