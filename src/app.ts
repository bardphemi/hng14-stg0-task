// third-party libraries
import express from "express";
import cors from "cors";
import httpStatus from "http-status";

// router
import mainRouter from "./modules";

// instantiate app
const app = express();

// middlewares 
app.use(cors());
app.use(express.json());
app.use("/api", mainRouter)
app.get("/health", (_req, res) => {
  return res
    .status(httpStatus.OK)
    .send({
      message: "API is healthy"
    });
});

export default app;
