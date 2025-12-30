import express from "express";
import {
  applyJob,
  getApplicationsByJob,
  updateApplicationStage,
} from "../controllers/application.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, applyJob);
router.get("/job/:jobId", authenticate, getApplicationsByJob);
router.patch("/:id/stage", authenticate, updateApplicationStage);

export default router;
