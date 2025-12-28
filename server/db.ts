import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Database is optional for static site mode
let poolInstance: pg.Pool | null = null;
let dbInstance: ReturnType<typeof drizzle> | null = null;

if (process.env.DATABASE_URL) {
  poolInstance = new Pool({ connectionString: process.env.DATABASE_URL });
  dbInstance = drizzle(poolInstance, { schema });
} else {
  // This allows the server to start without a database for static sites
  console.warn("DATABASE_URL not set. Running in static mode without database.");
}

export const pool = poolInstance;
export const db = dbInstance;
