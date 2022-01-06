import express from "express";
import controller from "../controllers/posts";
import middleware from "../middleware/isAuthed";

const router = express.Router();

router.get("/posts", controller.getPosts);
router.get("/posts/:id", controller.getPost);
// SECURE ENDPOINTS
router.post("/posts", [middleware.isAuthed, controller.addPost]);
router.put("/posts/:id", [middleware.isAuthed, controller.updatePost]);
router.delete("/posts/:id", [middleware.isAuthed, controller.deletePost]);

export = router;
