import express from "express";
import verifyAdminAccount from "../utils/verifyAdminAccount.js";
import verifyModeratorAccount from "../utils/verifyModeratorAccount.js";

// Controllers
import {
  loginForAdmin,
  addAdminAccount,
  getAdminAccount,
} from "../controllers/auth_controller.js";

const router = express.Router();

router.get("/get-admin-account", verifyModeratorAccount, getAdminAccount);

router.post("/login-for-admin", loginForAdmin);
router.post("/add-admin-account", verifyAdminAccount, addAdminAccount);

export default router;
