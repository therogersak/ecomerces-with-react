import React from 'react'
import {StarIcon, HeartIcon} from '@heroicons/react/solid'
function Item({count , imgURL, title , rate , price }) {
    console.log(title);
  return (
    <>
   <div className='relative'>
   <div className='space-y-3 m-2'>
     <div className='w-[250px]'>
     <img src={imgURL} alt={title} className="w-full h-full object-cover" />
     </div>
     <h3 className='text-center'>{title}</h3>
     <div className="flex items-center space-x-2 justify-center">
        <div className='flex items-center bg-green-500 text-white px-1 shadow-lg rounded-sm'><span>{rate}</span> <StarIcon className='h-4' /> </div><span>({count})</span>
     </div>
     <div className="flex items-center justify-center">
        <span className='font-bold flex items-center'>${price} <p className='text-sm text-gray-500 pl-3 line-through'>{price -10}</p></span>
     </div>

    </div>
     <div>
        <HeartIcon className='h-5 absolute top-0 right-0 cursor-pointer' />
     </div>
   </div>
    </>
  )
}

export default Item