import pool from "../db/dbConnection.js";
import path from "path";
import { createBrandData } from "../model/brandModel.js";
import { Console } from "console";

export const createBrand = async (req, res) => {
  const { name } = req.body;
  const image = req.file;

  console.log("image", image);

  if (!name || !image) {
    return res.status(400).json({ message: "Name and image are required" });
  }
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
    const results = await createBrandData(name, imageUrl);

    res.status(201).json(results);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Fetch all brands with image paths
export const getAllBrands = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM brand");
    const brands = result.rows.map((brand) => ({
      ...brand,
      image: `http://localhost:5001/${brand.imagepath}`, // Correct URL format
    }));
    res.status(200).json(brands);
  } catch (err) {
    console.error("❌ Error fetching brands:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//@desc create Brand
//@route Post /app/brand
//@access public

// export const createBrand = async (req, res, next) => {
//   const { name } = req.body;
//   const image = req.file; // Image file is available here

//   // Check if name and image are provided
//   if (!name || !image) {
//     return res.status(400).json({ message: "Name and image are required" });
//   }

//   try {
//     console.log("image >>>>>>>>", image);
//     console.log("name >>>>>>>>>", name);
//     // Get MIME type using mime-types package
//     const mimeType = mime.lookup(image.originalname);

//     // Save image and name in the database (assuming image is stored as buffer)
//     const newBrand = await createBrandData(name, image.buffer);
//     console.log("newBrand", newBrand);
//     // Convert image buffer to base64 for returning in response
//     const base64Image = newBrand.image.data.toString("base64");
//     console.log("base64Image", base64Image);

//     return res.status(201).json({
//       message: "Brand created successfully",
//       brand: {
//         id: newBrand.id,
//         name: newBrand.name,
//         image: `data:${mimeType};base64,${base64Image}`, // Image as base64 URL with dynamic MIME type
//       },
//     });
//   } catch (err) {
//     console.error("Error creating brand:", err);
//     next(err); // Pass the error to the error handler
//   }
// };

//@desc Get All the Brand
//@route Get /app/brand
//@access public
export const getAllBrand = (req, res) => {
  res.status(200).json({
    message: "Get All Brand",
  });
};

//@desc Get A Brand
//@route Get /app/brand/:id
//@access public
export const getBrand = (req, res) => {
  res.status(200).json({ message: `get by ID= ${req.params.id} my brand` });
};

//@desc update Brand
//@route put /app/brand/:id
//@access public
export const updateBrand = (req, res) => {
  res.status(200).json({ message: `put by ID= ${req.params.id} my store` });
};

//@desc Delete Brand
//@route delete /app/brand/:id
//@access public
export const deleteBrand = (req, res) => {
  res.status(200).json({ message: `delete by ID= ${req.params.id} my store` });
};
