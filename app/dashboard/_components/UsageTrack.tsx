// "use client";
// import { Button } from '@/components/ui/button';
// import { db } from '@/utils/db';
// import { AIOutput } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import { eq } from 'drizzle-orm';
// import React, { useContext, useEffect, useState } from 'react';
// import { HISTORY } from '../history/page';
// // import * as history from '../history/page';
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
// import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
// import Link from 'next/link'; // Import Link from Next.js

// function UsageTrack() {
//     const { user } = useUser();
//     const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

//     const [maxWords, setMaxWords] = useState(10000);
//     const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

//     useEffect(() => {
//         if (user) {
//             GetData();
//         }
//     }, [user]);

//     useEffect(() => {
//         if (user) {
//             GetData();
//         }
//     }, [updateCreditUsage, user]);

//     const GetData = async () => {
//         {/*@ts-ignore */}
//         const result: HISTORY[] = await db.select().from(AIOutput)
//             .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
//         GetTotalUsage(result);
//     };
    

//     const GetTotalUsage = (result: HISTORY[]) => {
//         let total: number = 0;
//         result.forEach(element => {
//             total += Number(element.aiResponse?.length);
//         });

//         setTotalUsage(total);
//         console.log(total);
//     };

//     return (
//         <div className='m-5'>
//             <div className='bg-primary text-white p-3 rounded-lg'>
//                 <h2 className='font-medium'>Credits</h2>
//                 <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
//                     <div className='h-2.5 bg-[#3B82F6] rounded-full'
//                         style={{
//                             width: (totalUsage / maxWords) * 100 + "%",
//                             transition: 'width 0.5s ease-in-out'
//                         }}>
//                     </div>
//                 </div>
//                 <h2 className='text-sm my-2'>{totalUsage}/10,000 Credits Used</h2>
//             </div>
//             <Link href="/dashboard/billing" passHref>
//                 <Button variant={'secondary'} className='w-full my-3 text-primary'>
//                     Upgrade
//                 </Button>
//             </Link>
//         </div>
//     );
// }

// export default UsageTrack;



"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import Link from 'next/link'; // Import Link from Next.js

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
    const [maxWords] = useState(10000); // Fixed the state as it doesn't change

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [updateCreditUsage, user]);

    const fetchData = async () => {
        if (!user || !user.primaryEmailAddress?.emailAddress) {
            console.error("User or email address is undefined");
            return; // Early return if user or email is not defined
        }

        const result: HISTORY[] = await db.select().from(AIOutput)
            .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
        calculateTotalUsage(result);
    };

    const calculateTotalUsage = (result: HISTORY[]) => {
        const total = result.reduce((acc, element) => acc + (Number(element.aiResponse?.length) || 0), 0);
        setTotalUsage(total);
        console.log(total);
    };

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                    <div
                        className='h-2.5 bg-[#3B82F6] rounded-full'
                        style={{
                            width: `${(totalUsage / maxWords) * 100}%`,
                            transition: 'width 0.5s ease-in-out'
                        }}
                    />
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/10,000 Credits Used</h2>
            </div>
            <Link href="/dashboard/billing" passHref>
                <Button variant='secondary' className='w-full my-3 text-primary'>
                    Upgrade
                </Button>
            </Link>
        </div>
    );
}

export default UsageTrack;
