import express from "express"
import {getMyprofile, login, logout, register } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();



router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/my",isAuthenticated,getMyprofile);

export default router;