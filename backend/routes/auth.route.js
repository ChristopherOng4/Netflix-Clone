import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/protectRoute.js"

const router = express.Router();

// router.post() defines a route handler for HTTP POST requests -> when user sends a POST request from the root path, it will output a response result
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck)

export default router; 