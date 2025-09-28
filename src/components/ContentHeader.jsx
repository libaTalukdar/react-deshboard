import React from 'react'

const ContentHeader = ({title,description,className}) => {
  return (
    <div className={`mb-2 ${className}`}>
       { title && (
            <h1 className='text-[15px] md:text-[20px] md:font-bold font-semibold'>{title}</h1> 
        )}
       
        {description && (
            <p className='text-[10px] md:text-[12px] font-semibold mt-1'>{description}</p>
        )}
      
    </div>
  )
}

export default ContentHeader
