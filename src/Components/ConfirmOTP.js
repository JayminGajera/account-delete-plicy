import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ConfirmOTP = () => {
  const [otp,setOtp] = useState();

  const {id} = useParams();

  const handleSubmit = async() => {
    const deleteAccount = await fetch(`http://passdn.ap-south-1.elasticbeanstalk.com/api/user/userDeleteForm`,{

    });
    console.log(deleteAccount);
  }

  return (
    <div className='w-full h-screen bg-[#F7F7F7] flex justify-center items-center'>
      <div className='flex flex-col gap-y-5 bg-white p-2'>
        <h2 className='text-2xl font-bold'>Conform OTP and delete account</h2>
        <input onChange={(e) => setOtp(e.target.value)} type='number' placeholder='x-x-x-x' className='border-[1.3px] border-gray-600 rounded-md p-2 outline-none'/>
        <button onClick={handleSubmit} className='bg-red-700 text-white p-2 rounded-md'>Delete Account</button>
      </div>
    </div>
  )
}

export default ConfirmOTP
 