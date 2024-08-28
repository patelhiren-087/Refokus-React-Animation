import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-10 flex gap-20'>
            <div className='basis-1/2'>
            <h1 className='text-[9rem] font-semibold leading-none tracking-tright'>Refokus.</h1></div>
            <div className='basis-1/2 flex gap-5'>

                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>Socials</h4>
                    {["Instagram",
                    "Twitter (x?)",
                    "LinkedIn"].map((elem, index) => (<a key={index} className='block mt-3 text-zinc-600 capitaliaze'>{elem}</a>))}
                </div>


                <div className='basis-1/2'>
                    <h4 className='mb-10 text-zinc-500'>Read more</h4>
                    {["News",
                    "Carrers",
                    "Refokus Tools",
                    "Webflow Agency"].map((elem, index) => (<a key={index} className='block mt-3 text-zinc-600 capitaliaze'>{elem}</a>))}
                </div>

                <div className='basis-1/2 flex flex-col items-end'>
                   <p className='text-right'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, adipisci.</p>
                   <img className='w-32 mt-10' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6653351b3ab3236cb452f2f3_Frame%2048097733.svg" alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
