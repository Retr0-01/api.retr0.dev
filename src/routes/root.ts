import express from "express";
import controller from "../controllers/root";
const router = express.Router();

router.get("/", controller.getAllRoutes);

export = router;
