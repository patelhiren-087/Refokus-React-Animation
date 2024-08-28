import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", number: 48},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b515985e5134af8d4d_65b4127d91ec4fa9b1124008_Logo%2520White%25202.svg", number: 2},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg", number: 11},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1c44ab856f14a95fc70_Logo-lockup-white.svg", number: 48},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5caaeaa90105bd7d1_64c1cdf5425388ed4532f603_Arqitel%2520Logo%2520White.svg", number: 2},
    ]


  return (
    <div className='flex items-center mt-5'>
      {data.map((elem,index) => (
        <Stripe val={elem} key={index}/>
      ))}
    </div>
  )
}

export default Stripes
