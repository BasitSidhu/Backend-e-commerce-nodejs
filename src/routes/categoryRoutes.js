// const express = require("express");
import express from "express";
const router = express.Router();
import {
  getAllCategory,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controller/categoryControler.js";

router.route("/").get(getAllCategory);
router.route("/:id").get(getCategory);
router.route("/").post(createCategory);
router.route("/:id").put(updateCategory);
router.route("/:id").delete(deleteCategory);

// module.exports = router;
export default router;
