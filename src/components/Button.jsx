import React from 'react'

const Button = ({
    text='',
    className='',
    color='',
    ...props
}) =>  {

  return (
    <button className={`px-6 py-1 text-md rounded-md cursor-pointer ${color || 'bg-violet-700 hover:bg-violet-600'} duration-150 ${className}`} {...props} >
        {text}
    </button>
  )
}

export default Button