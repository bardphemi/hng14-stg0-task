// third-party libraries
import express from "express";
import cors from "cors";

// instantiate app
const app = express();

// middlewares 
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
