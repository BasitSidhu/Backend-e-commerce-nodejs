//@desc Get All the Products
//@route Get /app/products
//@access public
const getAllProducts = (req, res) => {
    res.status(200).json({
      message: "Get All product",
    });
  };
  
  //@desc Get A Products
  //@route Get /app/products/:id
  //@access public
  const getProducts = (req, res) => {
    res.status(200).json({ message: `get by ID= ${req.params.id} my product` });
  };
  
  //@desc create Products
  //@route Post /app/products
  //@access public
  const createProducts = (req, res) => {
    res.status(200).json({ message: "post product" });
  };
  
  //@desc update Products
  //@route put /app/products/:id
  //@access public
  const updateProducts = (req, res) => {
    res.status(200).json({ message: `put by ID= ${req.params.id} my product` });
  };
  
  //@desc Delete Products
  //@route delete /app/products/:id
  //@access public
  const deleteProducts = (req, res) => {
    res.status(200).json({ message: `delete by ID= ${req.params.id} my product` });
  };
  
  module.exports = {
    getAllProducts,
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
  };
  