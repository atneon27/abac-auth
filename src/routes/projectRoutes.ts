import { Router } from "express";

const router = Router();

//@ts-ignore
router.get('/:id', verifyToken, viewProject);

// @ts-ignore
router.post('/:id', verifyToken, updateProject);

export default router;