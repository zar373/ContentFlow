// import Templates from "@/app/(data)/Templates";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import {desc, eq } from 'drizzle-orm'
// import Image from "next/image";
// import React from "react";
// import { TEMPLATE } from "../_components/TemplateListSection";

//  export interface HISTORY{
//     id:Number,
//     formData:string,
//     aiResponse:string,
//     templateSlug:string,
//     createdBy:string,
//     createdAt:string,
// }
// async function History() {
//     const user= await currentUser();
//     <div>

//     </div>
//     {HistoryList.map((item:HISTORY,index:number)=>(
//         <>
//         <div className='grid grid-cols-7 my-5 py-3 px-3'>
//         <h2 className='col-span-2 flex gap-2 items-center'>
//             <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25}
//             {GetTemplateName(item.templateSlug)?.name}
//         </h2>
//         <h2 className="COL-SPAN-2 line-clamp-3">{item?.aiResponse}</h2>
//         <h2>{item.createdAt}</h2>
//         <h2>{item?.aiResponse.length}</h2>
//         <h2>
//             <Button variant='ghost' className="text-primary">Copy</Button>
//         </h2>
//         </div>
//         <hr/>
//            </>
//     ))}
//     /div>
// }


// import Templates from "@/app/(data)/Templates";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import { desc, eq } from 'drizzle-orm';
// import Image from "next/image";
// import React from "react";
// import { TEMPLATE } from "../_components/TemplateListSection";

// export interface HISTORY {
//     id: Number;
//     formData: string;
//     aiResponse: string;
//     templateSlug: string;
//     createdBy: string;
//     createdAt: string;
// }


// async function History() {
//     const user = await currentUser();
//     {/* @ts-ignore */ }

//     // Fetch history entries from the database
//     const HistoryList: HISTORY[] = await db.select().from(AIOutput)
//         .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.id));

//     const GetTemplateName = (slug: string) => {
//         const template: TEMPLATE | any = Templates?.find((item) => item.slug ==slug)
//         return template;
//     }
//     return (
//         <div className="m-5 p-5 border rounded-lg bg-white">
//             <h2 className="text-3xl font-bold mb-5">History</h2>
//             <p className="text-gray-500">Search your previously generated AI content</p>
//             <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 border-b">
//                 <h2 className="col-span-2">TEMPLATE</h2>
//                 <h2 className="col-span-2">AI RESPONSE</h2>
//                 <h2>DATE</h2>
//                 <h2>WORDS</h2>
//                 <h2>COPY</h2>
//             </div>
//             {HistoryList.map((item: HISTORY, index: number) => (
//                 <>
//                     <div className="grid grid-cols-7 my-5 py-3 px-3">
//                         <h2 className="col-span-2 flex gap-2 items-center">
//                             <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt={GetTemplateName(item?.templateSlug)?.name || "Template Icon"}
//                             />
//                             {GetTemplateName(item?.templateSlug)?.name}
//                         </h2>

//                         <h2 className="col-span-2 line-clamp-3">{item?.aiResponse}</h2>
//                         <h2>{item.createdAt}</h2>
//                         <h2>{item?.aiResponse.length}</h2>
//                         <h2>
//                             <Button variant="ghost" className="text-primary"
//                                 onClick={() => navigator.clipboard.writeText(item.aiResponse)}
//                             >Copy</Button>
//                         </h2>
//                     </div>
//                     <hr />
//                 </>
//             ))}
//         </div>
//     );
// }

// export default History;

import React from 'react'

function HISTORY() {
  return (
    <div>
      History
    </div>
  )
}

export default HISTORY
