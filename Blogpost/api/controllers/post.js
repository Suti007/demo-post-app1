import { db } from "../db.js";
export const getPosts=(req,res)=>{
    const q=req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    //? "SELECT * FROM posts1"
    : "SELECT * FROM posts"
    db.query(q,[req.query.cat],(err,result)=>{
      console.log(result)
      res.send(result)
    })
}
export const getPost=(req,res)=>{
    res.json("Post from Controller")
}
export const addPost=(req,res)=>{
    res.json("Post from Controller")
}
export const deletePost=(req,res)=>{
    res.json("Post from Controller")
}
export const updatePost=(req,res)=>{
    res.json("Post from Controller")
}