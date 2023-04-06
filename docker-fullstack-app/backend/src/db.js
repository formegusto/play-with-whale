import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "formegusto",
  database: "formeapp",
});

export default pool;
