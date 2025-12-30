const allowedTransitions = {
  Applied: ["Screening", "Rejected"],
  Screening: ["Interview", "Rejected"],
  Interview: ["Offer", "Rejected"],
  Offer: ["Hired", "Rejected"],
  Hired: [],
  Rejected: []
};

export const validateTransition = (currentStage, nextStage) => {
  return allowedTransitions[currentStage]?.includes(nextStage);
};
