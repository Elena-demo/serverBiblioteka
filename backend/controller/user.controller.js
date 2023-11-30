import pool from "../db.js";

export async function selectBook(req, res) {
  const result = await pool.query(`SELECT * from "Books"`);
  console.log(result, result.rows);
  res.json(result.rows);
}

export async function insertBook(req, res) {
  console.log(req.body);

  const values = [req.body.id_book, req.body.name_book, req.body.id_author];

  const query = await pool.query(
    `insert into "Books" values ($1,$2,$3)`,
    values
  );
  // ,
  // (err, rows, fields) => {
  //   if (err) throw err;

  return res.json(req.body);
}
// );
// }

export async function selectBookID(req, res) {
  console.log(req.params.id);
  const rez = await pool.query(`Select * From "Books" Where id_author = $1`, [
    req.params.id,
  ]);
  res.json(rez.rows);
}

export async function deleteBook(req, res) {
  console.log(req.params.id);
  const rez = await pool.query(`delete from "Books" where id_author = $1`, [
    req.params.id,
  ]);
  res.json(rez.rows);
}

export async function updateBook(req, res) {
  // console.log(req.params.id);
  console.log(req.body);
  const rez = await pool.query(
    `update "Books" set name_book = $1 where id_book = $2`,
    [req.body.name, req.body.id]
  );
  res.json(rez.rows);
}
