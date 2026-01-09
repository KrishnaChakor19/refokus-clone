import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-[130px] px-4 py-1 mt-2 bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className='text-black text-sm font-medium'>{title}</span>
        <IoIosReturnRight className=' text-black font-bold'/>
    </div>
  )
}

export default Button