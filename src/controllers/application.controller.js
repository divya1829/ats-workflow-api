import { Application, User } from "../models/index.js";

export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    if (!jobId) {
      return res.status(400).json({ message: "jobId is required" });
    }

    const application = await Application.create({
      jobId,
      userId: req.user.id,
      stage: "Applied",
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const applications = await Application.findAll({
      where: { jobId },
      include: [
        {
          model: User,
          attributes: ["id", "name", "email", "role"],
        },
      ],
    });

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateApplicationStage = async (req, res) => {
  try {
    const { id } = req.params;       // application id
    const { stage } = req.body;      // new stage

    if (!stage) {
      return res.status(400).json({ message: "stage is required" });
    }

    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    application.stage = stage;
    await application.save();

    res.status(200).json({
      message: "Application stage updated",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
