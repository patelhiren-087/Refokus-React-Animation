import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion } from "framer-motion";


function Card({width, start, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor : hover === "true" && "#7443ff", color: "black", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
       <div className='w-full'>
       <div className='w-full flex items-center justify-between'>
            <h3>Who we are</h3>
                <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium mt-5'>Who we are</h1>
       </div>

       <div className='down w-full'>
            {start && 
            <>
            <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
            <button className='rounded-full py-2 px-5 border-[2px] border-zinc-0 mt-5'>Contact Us!</button>
            </>}


            <p className='text-sm text-zinc-200 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            
       </div>
    </motion.div>
  )
}

export default Card
