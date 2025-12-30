export const validateTransition = (currentStage, nextStage) => {
  const workflow = {
    Applied: ["Screening", "Rejected"],
    Screening: ["Interview", "Rejected"],
    Interview: ["Offer", "Rejected"],
    Offer: ["Hired", "Rejected"],
    Hired: [],
    Rejected: [],
  };

  // If current stage is invalid
  if (!workflow[currentStage]) {
    return false;
  }

  // Prevent same-stage transition
  if (currentStage === nextStage) {
    return false;
  }

  // Check if transition is allowed
  return workflow[currentStage].includes(nextStage);
};
