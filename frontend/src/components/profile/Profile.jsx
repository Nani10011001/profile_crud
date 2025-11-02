import React from 'react'

import {motion} from"framer-motion"

import FormData from './FormData.jsx'
const Profile = () => {
   
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <motion.div
        initial={{
            opacity:0,
            y:20,
            
          
            
        }}
        animate={{
         
            opacity:1,
            y:0        
        }}
        transition={{
            duration:0.8,
            delay:0.5,
            ease: "easeIn"
        }}
        className='bg-gray-400 w-1/2 h-130 opacity-90  shadow-gray-500 shadow-2xl  rounded-md '>
<div className='flex justify-center mt-4'><h1 className='font-bold text-3xl text-white '>Profile </h1></div>
   
   <div className="picture justify-center flex mt-3 "><img className='w-30 h-30 rounded-full ' src="data:image/webp;base64,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" alt="" /></div>
    


    <FormData/>
    </motion.div>

      
    </div>
  )
}

export default Profile
