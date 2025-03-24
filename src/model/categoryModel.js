import pool from "../db/dbConnection.js";

export const getAllCategoryData = async()=>{
    const result = await pool.query("SELECT * FROM category");
    return result.rows
}

export const getCategoryData = async(id)=>{
    const result = await pool.query("SELECT * FROM category where id =$1",[id]);
    return result.rows[0]
}

export const createCategoryData = async(name)=>{
    const result = await pool.query("INSERT INTO category (name) VALUES ($1) RETURNING *",[name]);
    return result.rows[0]
}

export const updateCategoryData = async(id,name,email)=>{
    const result = await pool.query("UPDATE category SET name=$1, email=$2 where id=$3 RETURNING *",[name,email,id]);
    return result.rows[0]
}

export const deleteCategoryData = async(id)=>{
    const result = await pool.query("DELETE from category where id=$1 RETURNING *",[id]);
    return result.rows[0]
}