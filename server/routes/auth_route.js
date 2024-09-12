import express from "express";

// Controllers
import {
  loginForAdmin,
  addAdminAccount,
  getAdminAccount,
} from "../controllers/auth_controller.js";

const router = express.Router();

router.get("/get-admin-account", getAdminAccount);

router.post("/login-for-admin", loginForAdmin);
router.post("/add-admin-account", addAdminAccount);

export default router;
