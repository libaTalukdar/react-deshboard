import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';
import { FaSubscript } from 'react-icons/fa6';
import { FiMenu } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
const Navbar = ({toggleSidebar}) => {
  return (
  <nav className='bg-gray-600 shadow-md py-4 px-2 w-full '>
 <div className="flex justify-between gap-2 items-center px-2">
<button onClick={toggleSidebar} className='md:hidden cursor-pointer '> 
<FiMenu className='size-[30px]'/>
</button>
<div className='flex bg-gray-200 items-center justify-center py-2 gap-2 px-2.5 min-w-[200px] max-w-xl rounded-md w-[100%] '>
  <FaSearch className='text-xl'/>
  <input type="text" placeholder='search here...' className='bg-transparent border-none w-full outline-none
  px-2 py-1'/>
</div>
<div className='flex items-center justify-center gap-x-2'>
<div className='relative'>
<div className='absolute bg-red-500 rounded-full w-2 h-2 top-[3px] right-[5px]'>

</div>
<FiBell className='text-2xl'/>
</div>
<FaUser className='text-2xl'/>
</div>
 </div>
  </nav>
  )
}

export default Navbar