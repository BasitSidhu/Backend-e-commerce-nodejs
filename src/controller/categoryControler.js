import { createCategoryData,getAllCategoryData,getCategoryData,updateCategoryData,deleteCategoryData } from "../model/categoryModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

//@desc Get All the Category
//@route Get /app/categorie
//@access public
export const getAllCategory = async (req, res, next) => {
  try {
    const users = await getAllCategoryData();
    handleResponse(res, 200, "Category created successfully", users);
  } catch (err) {
    next(err);
  }
};

//@desc Get A Category
//@route Get /app/categorie/:id
//@access public
export const getCategory = async (req, res, next) => {
  try {
    const user = await getCategoryData(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User fetch successfully", user);
  } catch (err) {
    next(err);
  }
  // res.status(200).json({ message: `get by ID= ${req.params.id} my store` });
};

//@desc create Category
//@route Post /app/categorie
//@access public
export const createCategory = async (req, res, next) => {
  const { name } = req.body;
  console.log("req.body",req.body)
  console.log("name",name)
  try {
    const newCategory = await createCategoryData(name);
    handleResponse(res, 201, "Category created successfully", newCategory);
  } catch (err) {
    next(err);
  }
};

//@desc update Category
//@route put /app/categorie/:id
//@access public
export const updateCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const updateUser = await updateCategoryData(req.params.id, name);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User fetch successfully", updateUser);
  } catch (err) {
    next(err);
  }
  // res.status(200).json({ message: `put by ID= ${req.params.id} my store` });
};

//@desc Delete Category
//@route delete /app/categorie/:id
//@access public
export const deleteCategory = async (req, res) => {
  try {
    const deleteUser = await deleteCategoryData(req.params.id);
    if (!deleteUser) handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User deleted successfully", deleteUser);
  } catch(err) {
next(err)
  }

  // res.status(200).json({ message: `delete by ID= ${req.params.id} my store` });
};

// module.exports = {s
//   getAllCategory,
//   getCategory,
//   createCategory,
//   updateCategory,
//   deleteCategory,
// };
