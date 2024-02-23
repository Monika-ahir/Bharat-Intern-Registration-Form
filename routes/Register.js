import express from "express";
import register from "../registerController.js";

const router = express.Router();

router.post("/register", register);

export default router;
