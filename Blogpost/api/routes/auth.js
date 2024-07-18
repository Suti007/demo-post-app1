import express from "express";
import { addPost } from "../controllers/post.js";
import { login, logout, register } from "../controllers/auth.js";
const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
//router.get("/test",addPost);
// router.get("/test",(req,res)=>{
//     res.json("This is from Posts")
// })
export default router;