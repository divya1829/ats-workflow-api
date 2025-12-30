import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";
import {
  createJob,
  getJobs,
  closeJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", authenticate, authorizeRoles("recruiter"), createJob);
router.get("/", authenticate, getJobs);
router.patch("/:id/close", authenticate, authorizeRoles("recruiter"), closeJob);

export default router;
