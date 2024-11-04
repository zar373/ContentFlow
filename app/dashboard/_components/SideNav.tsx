"use client";
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link'; 
import UsageTrack from './UsageTrack';

function SideNav() {
    const MenuList = [
      {
        name: 'Home',
        icon: Home,
        path: '/dashboard'
      },
      {
        name: 'History',
        icon: FileClock,
        path: '/dashboard/history'
      },
      {
        name: 'Billing',
        icon: WalletCards,
        path: '/dashboard/billing'
      },
      {
        name: 'Settings',
        icon: Settings,
        path: '/dashboard/settings' // Point to the settings catch-all
      }
    ];
    
    const path = usePathname();

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src={'/ContentFlow.svg'} alt='logo' width={120} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path}> {/* Correct href usage */}
                        <div className={`flex gap-2 mb-2 p-3
                            hover:bg-primary hover:text-white rounded-lg
                            cursor-pointer items-center
                            ${path === menu.path ? 'bg-primary text-white' : ''}`}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    );
}

export default SideNav;
