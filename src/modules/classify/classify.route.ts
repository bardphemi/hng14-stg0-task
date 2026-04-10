// third-party libraries
import { Router } from "express";
import classifyCtrl from "./classify.controller";

// router instance
const classifyRouter = Router();

classifyRouter
  .route("/")
  .get(classifyCtrl.classifyName)

export default classifyRouter;
