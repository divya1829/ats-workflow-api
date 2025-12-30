import { Job } from "../models/index.js";

/**
 * Create a new job
 */
export const createJob = async (req, res) => {
  try {
    const { title, description, companyId } = req.body;

    if (!companyId) {
      return res.status(400).json({ message: "companyId is required" });
    }

    const job = await Job.create({
      title,
      description,
      companyId
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get all jobs
 */
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Close a job  ✅ THIS WAS MISSING
 */
export const closeJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findByPk(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    job.status = "closed";
    await job.save();

    res.json({ message: "Job closed successfully", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
