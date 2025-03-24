import pool from "../db/dbConnection.js";

export const createBrandData = async (name, imagePath) => {
  const results = await pool.query(
    "INSERT INTO brand (name,imagePath) VALUES ($1, $2) RETURNING*",
    [name, imagePath]
  );
  return results.rows[0];
};
