import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-4xl mx-auto py-10 flex gap-24'>
            <div className='basis-1/2'>
                <h1 className='text-9xl leading-none tracking-tight font-bold'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex'>
            <div className='basis-1/3'>
                <h4 className='mb-7 text-zinc-500'>Socials</h4>
                {["Instagram", "Twitter", "LinkedIn"].map((item, index)=> <a key={index} className='block mt-2 text-zinc-600 text-sm'> {item}  </a>
            )}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-7 text-zinc-500'>Socials</h4>
                {["Instagram", "Twitter", "LinkedIn"].map((item, index)=> <a key={index} className='block mt-2 text-zinc-600 text-sm'> {item}  </a>
            )}
            </div>
            <div className='basis-1/2 '>
                <p className='text-xs text-right'>Refokus is digital agency driven by
                            design and empowered by technology.</p>
                <img
                    src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                    alt=""
                    className="w-24 px-4 ml-auto py-1 mt-8 bg-blue-600"
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer