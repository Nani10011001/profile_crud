import React from 'react'
import {motion} from "framer-motion"

const Floatdiv = ({size,delay, top ,left,right,bottom}) => {
    const randomness=(min,max)=>Math.random()*(max-min)+min
  return (
    <motion.div className={`absolute bg-gray-400 blur-xl ${size}  opacity-50 rounded-full`}
  animate={{
    x:["0%",randomness(-30.30),randomness(-20,40)],
    y:["0%",randomness(-5,30),randomness(-30,70)],
    rotate:[0,randomness(0,180),randomness(180,360),0]
  }}
  transition={{
    duration:20,
    delay,
    repeat:Infinity,
    
    ease:"easeIn"
  }}
  style={{top,left,right,bottom}}
  aria-hidden="true"
    >
      
    </motion.div>
  )
}

export default Floatdiv
