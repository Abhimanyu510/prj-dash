import React from 'react'
import { FaBars } from "react-icons/fa";


type TopbarProps = {
  onMenuClick? : () => string;
};


const Topbar:React.FC<TopbarProps> = ({onMenuClick}) => {
  return (
    <div className='w-full h-20 bg-gray-900 text-white flex items-center justify-between px-4 shadow-md'>
      {/* Left: Menu Button */}
      <button onClick={() => onMenuClick?.()}
      className='text-xl'>
      <FaBars />
      </button>

      {/* Center:Title */}
      <h1 className='text-lg font-semibold'>Project</h1>

     
      <div></div>
      
       
      
    </div>
  )
}

export default Topbar
