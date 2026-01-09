import { motion } from "motion/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const Card = ({ width, start, para, hover = false, header, title }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === 'true' && "#7443ff", padding: "25px"}} className={`${width} bg-zinc-800  p-4 rounded-xl flex flex-col`}>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-sm">{header}</h3>
          <FaArrowRightLong className="ml-auto " />
        </div>
        <h1 className="text-2xl mt-2">{title}</h1>
        
        <div className="down">
            {start && (
            <>
                <h1 className="text-4xl mt-42 font-semibold">Start a Project</h1>
                <button className="rounded-full border border-zinc-500 px-4 py-1 mt-3 text-sm">
                Contact Us
                </button>
            </>
            )}
        </div>
      </div>
      {para && ( <p className="text-xs font-medium mt-auto text-zinc-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      )}
     
    </motion.div>
  );
};

export default Card;
