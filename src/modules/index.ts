// third-party libraire 
import { Router } from "express";
import classifyRouter from "./classify/classify.route";

// router(s)
const mainRouter = Router();

// route(s)
mainRouter.use("/classify", classifyRouter)

export default mainRouter;
