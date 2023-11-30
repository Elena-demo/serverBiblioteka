import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  database: "Biblioteka",
  user: "postgres",
  password: "1234",
});

// async function test() {
//   const books = await pool.query(`SELECT * from "Books"`);
//   console.log(books.rows);
// }

// test();

export default pool;
