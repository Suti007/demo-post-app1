import express from "express";
import { addPost } from "../controllers/post.js";
const router=express.Router();
//router.get("/test",addPost);
// router.get("/test",(req,res)=>{
//     res.json("This is from Posts")
// })
export default router;