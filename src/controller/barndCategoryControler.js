//@desc Get All the BrandCategory
//@route Get /app/brandCategory
//@access public
const getAllBrandCategory = (req, res) => {
    res.status(200).json({
      message: "Get All Brand Category",
    });
  };
  
  //@desc Get A BrandCategory
  //@route Get /app/brandCategory/:id
  //@access public
  const getBrandCategory = (req, res) => {
    res.status(200).json({ message: `get by ID= ${req.params.id} my Brand Category` });
  };
  
  //@desc create BrandCategory
  //@route Post /app/brandCategory
  //@access public
  const createBrandCategory = (req, res) => {
    res.status(200).json({ message: "post Brand Category" });
  };
  
  //@desc update BrandCategory
  //@route put /app/brandCategory/:id
  //@access public
  const updateBrandCategory = (req, res) => {
    res.status(200).json({ message: `put by ID= ${req.params.id} my Brand Category` });
  };
  
  //@desc Delete BrandCategory
  //@route delete /app/brandCategory/:id
  //@access public
  const deleteBrandCategory = (req, res) => {
    res.status(200).json({ message: `delete by ID= ${req.params.id} my Brand Category` });
  };
  
  module.exports = {
    getAllBrandCategory,
    getBrandCategory,
    createBrandCategory,
    updateBrandCategory,
    deleteBrandCategory,
  };
  