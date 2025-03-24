// const express = require("express");
import express from 'express'
import upload from '../middlewares/multerHandler.js';
const router = express.Router();
import {
    getAllBrand,
    getBrand,
    createBrand ,
    updateBrand,
    deleteBrand,
} from "../controller/barndControler.js"

router.route("/").get(getAllBrand);
router.route("/:id").get(getBrand);
// router.route("/").post(createBrand);
router.route("/").post(upload, createBrand);
router.route("/:id").put(updateBrand);
router.route("/:id").delete(deleteBrand);


export default router
// module.exports = router;
