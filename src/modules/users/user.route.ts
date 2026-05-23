import { Router, type Request, type Response } from "express";
import { pool } from "../../DB";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", userController.createUser);

router.get("/", auth(), userController.getAllUser);

router.get("/:id", userController.getSingleUser);

export const userRoute = router;
