import pool from "../db/dbConnection.js";

const createCategoryTable = async () => {
  const querText = `
    CREATE TABLE IF NOT EXISTS category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;
  try {
    pool.query(querText);
    console.log("Category Table created if it not exist");
  } catch (err) {
    console.log("Error in creation of category table")
  }
};
export default createCategoryTable