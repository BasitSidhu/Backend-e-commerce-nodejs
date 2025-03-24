// import pool from "./dbConnection.js";
import pool from "../db/dbConnection.js";

const createBrandTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS brand (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      imagePath VARCHAR(255) NOT NULL
    )`;

  try {
    await pool.query(queryText);
    console.log("✅ Brand table created (or already exists)");
  } catch (err) {
    console.error("❌ Error creating brand table:", err);
  }
};

export default createBrandTable;
