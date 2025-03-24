import pkg from "pg";
import dotenv from "dotenv"

const { Pool } = pkg;
dotenv.config()

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
pool.on("connect", () => {
  console.log("connection pool establised with Database");
});

export default pool

// const {Client} = require("pg")

// const connection = new Client({
//     host:"localhost",
//     user:"postgres",
//     port:5433,
//     database: 'your_db_name',
//   password: 'your_db_password',
// })
// connection.connect().then(()=>console.log("connected"))
