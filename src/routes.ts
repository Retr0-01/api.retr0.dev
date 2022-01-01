import express from "express";

import root from "./routes/root";
import posts from "./routes/posts";

const router = express.Router();

// Root endpoint
router.use("/", root);
// Posts endpoint
router.use("/", posts);

export = router
