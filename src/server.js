import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import pool from "./db/dbConnection.js";
import errorHandler from "./middlewares/errorHandler.js";
import categoryRoute from "./routes/categoryRoutes.js";
import createCategoryTable from "./data/createCategoryTable.js"
import brandRoute from './routes/brandRoutes.js'
import createBrandTable from "./data/createBrandTable.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

//midleware
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
createCategoryTable()
createBrandTable()

// console.log("Serving static files from:", path.join(process.cwd(), 'uploads'));
// app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/uploads', express.static(path.resolve('uploads')));

console.log("Serving static files from:", path.resolve('uploads'));
//routes
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is = ${result.rows[0].current_database}`);
});
app.use("/app/category", categoryRoute);
app.use('/app/brand',brandRoute)



app.listen(port, () => {
  console.log(`this is my server ${port}`);
});
