/** @type { import("drizzle-kit").Config}  */
export default{
    schema:"./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials: {
        url:'postgresql://neondb_owner:WEODte2RiU4V@ep-misty-feather-a8f70qlv.eastus2.azure.neon.tech/Content%20Flow?sslmode=require'
    }
}