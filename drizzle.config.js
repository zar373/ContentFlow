// // /** @type { import("drizzle-kit").Config}  */
// // export default{
// //     schema:"./utils/schema.tsx",
// //     dialect:'postgresql',
// //     dbCredentials: {
// //         url:'postgresql://neondb_owner:npg_fYWERUZX63um@ep-tiny-darkness-a8oft973-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
// //     }
// // }



// // // dbCredentials: {
// // //     url:'postgresql://neondb_owner:WEODte2RiU4V@ep-misty-feather-a8f70qlv.eastus2.azure.neon.tech/Content%20Flow?sslmode=require'
// // // }
// // // }

// /** @type { import("drizzle-kit").Config } */
// export default {
//     schema: "./utils/schema.tsx", // Ensure this path is correct
//     out: "./drizzle/migrations",   // Optional, for migration output
//     dialect: "postgresql",         // Correct dialect
//     dbCredentials: {
//       host: "ep-tiny-darkness-a8oft973-pooler.eastus2.azure.neon.tech",  // The host for your Neon DB
//       database: "neondb",           // The database name
//       user: "neondb_owner",         // The user for the database
//       password: "npg_fYWERUZX63um", // The password for the database
//       sslmode: "require",           // Optional SSL mode
//     },
//   };
  
// //   snowy-meadow-37949103

/** @type { import("drizzle-kit").Config}  */
export default{
    schema:"./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials: {
        url:'postgresql://neondb_owner:WEODte2RiU4V@ep-misty-feather-a8f70qlv.eastus2.azure.neon.tech/Content%20Flow?sslmode=require'
    }
}