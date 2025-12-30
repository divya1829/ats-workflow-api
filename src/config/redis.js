import Queue from "bull";
import dotenv from "dotenv";

dotenv.config();

const emailQueue = new Queue("email-queue", {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

export default emailQueue;
