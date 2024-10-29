import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='flex items-center justify-centerh-full' >
        <UserProfile/>
    </div>
  )
}

export default Settings
