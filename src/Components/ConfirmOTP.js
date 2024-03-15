import React from 'react'

const ConfirmOTP = () => {
  return (
    <div className='w-full h-screen bg-[#F7F7F7] flex justify-center items-center'>
      <div className='flex flex-col gap-y-5 bg-white p-2'>
        <h2 className='text-2xl font-bold'>Conform OTP and delete account</h2>
        <input type='number' placeholder='x-x-x-x' className='border-[1.3px] border-gray-600 rounded-md p-2 outline-none'/>
        <button className='bg-red-700 text-white p-2 rounded-md'>Delete Account</button>
      </div>
    </div>
  )
}

export default ConfirmOTP
