import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Export the pool for reuse
export default pool;