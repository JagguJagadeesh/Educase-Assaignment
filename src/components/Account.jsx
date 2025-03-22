import React from 'react'
import { BiCamera } from 'react-icons/bi'

function Account() {
  return (
    <div className='flex flex-col px-4 py-6 gap-2'>
      <h1>Account Setting</h1><hr className='text-gray-500' /> 
      <div className='flex flex-col gap-4'>
        <div className='flex gap-3 items-center'>
          {/* <img className='w-12 rounded-full border-2 border-violet-700' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" alt="jkhejq" /> */}
          <div className="relative inline-flex">
            <img
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className="inline-block relative object-cover object-center rounded-full w-12 h-12"
            /><span
              className="absolute min-w-[12px] min-h-[12px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center bottom-[14%] right-[14%] translate-x-2/4 translate-y-2/4 bg-violet-500 text-white border border-white"
            ><BiCamera/></span>
          </div>
          <div>
            <h3 className='text-lg'>Marry Doe</h3>
            <p className='text-sm text-gray-600'>Marry@gmail.com</p>
          </div>
        </div>
        <p className='text-wrap'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, impedit. Corrupti, dolores vel dignissimos nihil molestias ducimus incidunt culpa placeat!</p>
      </div>     
    </div>
  )
}

export default Account