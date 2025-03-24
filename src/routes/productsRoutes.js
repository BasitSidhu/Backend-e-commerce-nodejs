const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
} = require("../controller/productsControler");

router.route("/").get(getAllProducts);
router.route("/:id").get(getProducts);
router.route("/").post(createProducts);
router.route("/:id").put(updateProducts);
router.route("/:id").delete(deleteProducts);

module.exports = router;
