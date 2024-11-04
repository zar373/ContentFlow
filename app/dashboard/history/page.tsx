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


// // import Templates from "@/app/(data)/Templates";
// // import { Button } from "@/components/ui/button";
// // import { db } from "@/utils/db";
// // import { AIOutput } from "@/utils/schema";
// // import { currentUser } from "@clerk/nextjs/server";
// // import { desc, eq } from 'drizzle-orm';
// // import Image from "next/image";
// // import React from "react";
// // import { TEMPLATE } from "../_components/TemplateListSection";



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

// // app/dashboard/history/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { db } from "@/utils/db"; // Adjust the import path as needed
// import { AIOutput } from "@/utils/schema";

// // Define the interface for AIOutput data
// interface AIOutputData {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

// // Function to handle date formatting and validation
// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
// };

// // Map templateSlug to icon paths (assuming icons are in the /public/icons directory)
// const iconMap: { [key: string]: string } = {
//   "instagram-post-generator": "/icons/instagram-icon.png",
//   "generate-blog-title": "/icons/blog-icon.png",
//   "youtube-seo-title": "/icons/youtube-icon.png",
//   "blog-content-generation": "/icons/content-icon.png",
//   "add-emoji-to-text": "/icons/emoji-icon.png",
//   // Add more mappings as needed
// };

// export default function HistoryPage() {
//   const [historyData, setHistoryData] = useState<AIOutputData[]>([]);

//   useEffect(() => {
//     // Fetch data from the database
//     const fetchData = async () => {
//       const data = await db.select().from(AIOutput);
//       setHistoryData(data);
//     };
    
//     fetchData();
//   }, []);

//   return (
//     <main className="min-h-screen bg-white flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold mb-4 text-center">History</h1>
//       <p className="text-lg text-center text-gray-500 mb-8">
//         Search your previously generated AI content
//       </p>
      
//       <div className="w-full max-w-4xl">
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-200 p-4 text-left font-semibold">TEMPLATE</th>
//               <th className="border border-gray-200 p-4 text-left font-semibold">AI RESP</th>
//               <th className="border border-gray-200 p-4 text-left font-semibold">DATE</th>
//               <th className="border border-gray-200 p-4 text-left font-semibold">WORDS</th>
//               <th className="border border-gray-200 p-4 text-left font-semibold">COPY</th>
//             </tr>
//           </thead>
//           <tbody>
//             {historyData.map((entry) => (
//               <tr key={entry.id} className="border-b border-gray-200">
//                 <td className="border border-gray-200 p-4 flex items-center">
//                   <img 
//                     src={iconMap[entry.templateSlug] || "/icons/default-icon.png"} 
//                     alt={`${entry.templateSlug} Icon`} 
//                     className="w-6 h-6 mr-2"
//                   />
//                   <span>{entry.templateSlug}</span>
//                 </td>
//                 <td className="border border-gray-200 p-4 text-gray-700 max-w-xs truncate">
//                   {entry.aiResponse}
//                 </td>
//                 <td className="border border-gray-200 p-4">
//                   {formatDate(entry.createdAt)}
//                 </td>
//                 <td className="border border-gray-200 p-4 text-center">
//                   {entry.aiResponse.split(" ").length}
//                 </td>
//                 <td 
//                   className="border border-gray-200 p-4 text-blue-600 cursor-pointer hover:underline"
//                   onClick={() => navigator.clipboard.writeText(entry.aiResponse)}
//                 >
//                   Copy
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/db"; // Adjust the import path as needed
import { AIOutput } from "@/utils/schema";
import dayjs from "dayjs"; // Optional: install dayjs with `npm install dayjs`


export interface HISTORY {
  id: Number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}


interface AIOutputData {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [historyData, setHistoryData] = useState<AIOutputData[]>([]);

  useEffect(() => {
    // Fetch data from the database
    const fetchData = async () => {
      const data = await db.select().from(AIOutput) as AIOutputData[];
      setHistoryData(data);
    };
    
    fetchData();
  }, []);

  // Format date with a fallback for invalid dates
  // Format date with specified input format for consistency
  const formatDate = (dateString: string) => {
    const date = dayjs(dateString, "DD/MM/yyyy"); // Ensure input format matches database date format
    return date.isValid()
      ? date.format("MM-DD-YYYY")  // Output format: "11-Nov-2024"
      : "Invalid Date"; // Fallback text for invalid dates
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">History</h1>
      <p className="text-lg text-center text-gray-500 mb-8">
        Search your previously generated AI content
      </p>
      
      <div className="w-full max-w-4xl">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-4 text-left font-semibold">TEMPLATE</th>
              <th className="border border-gray-200 p-4 text-left font-semibold">AI RESP</th>
              <th className="border border-gray-200 p-4 text-left font-semibold">DATE</th>
              <th className="border border-gray-200 p-4 text-center font-semibold">WORDS</th>
              <th className="border border-gray-200 p-4 text-center font-semibold">COPY</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry) => (
              <tr key={entry.id} className="border-b border-gray-200">
                <td className="border border-gray-200 p-4">
                  <span>{entry.templateSlug}</span>
                </td>
                <td className="border border-gray-200 p-4 text-gray-700 max-w-xs truncate">
                  {entry.aiResponse}
                </td>
                <td className="border border-gray-200 p-4">
                  {formatDate(entry.createdAt)}
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  {entry.aiResponse.split(" ").length}
                </td>
                <td
                  className="border border-gray-200 p-4 text-[#36C6D0] cursor-pointer hover:underline text-center"
                  onClick={() => navigator.clipboard.writeText(entry.aiResponse)}
                >
                  Copy
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
