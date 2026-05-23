import { Router, type Request, type Response } from "express";
import { pool } from "../../DB";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../types";

const router = Router();





router.get("/", auth(USER_ROLE.maintainer), userController.getAllUser);

router.get("/:id", userController.getSingleUser);

export const userRoute = router;
