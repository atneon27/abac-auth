import { Router } from "express";
import verifyToken from "../middleware/authentication.js";
import { viewProject, updateProject } from "../controllers/projectController.js";
const router = Router();
router.get('/:id', verifyToken, viewProject);
router.post('/:id', verifyToken, updateProject);
export default router;
