const express = require("express");
const router = express.Router();
const {
    getAllBrandCategory,
    getBrandCategory,
    createBrandCategory,
    updateBrandCategory,
    deleteBrandCategory,
} = require("../controller/barndCategoryControler");

router.route("/").get(getAllBrandCategory);
router.route("/:id").get(getBrandCategory);
router.route("/").post(createBrandCategory);
router.route("/:id").put(updateBrandCategory);
router.route("/:id").delete(deleteBrandCategory);

module.exports = router;
