import React from 'react'

export const Button = ({ text, icon }) => {
    return (
        <div className='bg-colorOne rounded-md p-4 cursor-pointer text-white px-8 inline-flex items-center gap-4 font-medium text-lg'>{text} {icon ? <img src="/arrow/Right.png" className='w-5' alt="" /> : null} </div>
    )
}
