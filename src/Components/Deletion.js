import React from 'react'
import AccountDeletionPolicy from './AccountDeletionPolicy'
import FeedBackForm from './FeedBackForm'

const Deletion = () => {
  return (
    <div className='w-full flex md:flex-row flex-col gap-y-5 gap-x-5 md:px-20 p-2'>
      <AccountDeletionPolicy/>
      <FeedBackForm/>
    </div>
  )
}

export default Deletion
