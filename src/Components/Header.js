import React from 'react'

const Header = () => {
  return (
    <div className='bg-black p-3 w-full flex justify-between md:px-20 px-2'>
      <h1 className='text-white font-semibold text-4xl'>Passdn</h1>
      <button className='border border-white text-white rounded-md px-5 cursor-pointer hover:bg-white hover:text-black'>BACK</button>
    </div>
  )
}

export default Header
