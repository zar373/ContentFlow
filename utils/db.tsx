import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { Import } from 'lucide-react';
import * as schema from './schema'

// Your existing DB setup
import { AIOutput } from './schema'; // Import the AIOutput schema
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
export const db = drizzle(sql,{schema});

