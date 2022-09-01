import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ponto_dev',
  password: '24861379',
  port: 5432
})


export const db = pool;