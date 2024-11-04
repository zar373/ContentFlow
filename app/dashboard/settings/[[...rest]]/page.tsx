import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-white'>
      <div className='flex items-center justify-center h-full'> {/* Fixed the class name here */}
        <UserProfile />
      </div>
    </main>
  );
}

export default Settings;
