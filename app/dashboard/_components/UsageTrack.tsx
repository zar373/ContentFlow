"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';


function UsageTrack() {

    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
    // const {userSubscription,setUserSubscription}=useContext(userSubscriptionContext)
    const [maxWords,setMaxWords]=useState(10000)
    const {updateCreditUsage,setupdateCreditUsage}=useContext(UpdateCreditUsageContext)

    useEffect(()=>{
        user&&GetData();
        // user&&IsUserSubscribe();
    
    },[user]);

    useEffect(()=>{
        user&&GetData();

    },[updateCreditUsage&&user]);

    const GetData=async()=>{
         {/*@ts-ignore */}
        const result:HISTORY[]=await db.select().from(AIOutput)
        .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
        GetTotalUsage(result)
    }

    // const IsUserSubscribe=async()=>{
    //     const resultg = await.db.select().from(UserSubscription)
    //     .where(eq(UserSubscription.email,user?.primaryEmailAddress?.emailAddress));
    //     console.log(result)
    //     if(resultg.length>0)
    //      {
    //         setUserSubscription(true);
    //         setMaxWords(1000000);
    //      }
    // }

    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result.forEach(element => {
            total=total+Number(element.aiResponse?.length)
        });

        setTotalUsage(total)
        console.log(total);
    }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width:(totalUsage/10000)*100+"%"
                }}>
                </div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit Used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
      
    </div>
  )
}

export default UsageTrack
