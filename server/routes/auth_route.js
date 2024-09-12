import express from "express";

// Controllers
import { loginForAdmin } from "../controllers/auth_controller.js";

const router = express.Router();

router.post("/login-for-admin", loginForAdmin);

export default router;
