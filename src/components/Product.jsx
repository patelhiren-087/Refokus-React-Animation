import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full py-10 h-[18rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='text-4xl capitalize font-medium'>{val.title}</h1>
            <div className='Details w-1/4'>
                <p className='mb-10'>{val.description}</p>
                <div className='flex items-center gap-5'>
                {val.live && <Button />}
                {val.case && <Button title='Case Study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
