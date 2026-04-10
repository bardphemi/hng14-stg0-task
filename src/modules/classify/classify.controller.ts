// third-party libraries
import { Request, Response } from "express";
import httpStatus from "http-status";

// utility functions
import logger from "../../utils/logger";

// controller
const classifyCtrl = {
  /**
   * @description classifies name as male, female
   * @param req 
   * @param res 
   * @returns 
   */
  async classifyName(req: Request, res: Response): Promise<Response> {
    const { name } = req.query as { name: string };
    try {
      return res
        .status(httpStatus.OK)
        .send({
          message: "Classify endpoint is active"
        });
    } catch (error: any) {
      logger.error(`An error occurred while classifying the name: ${error.message}`);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({
          message: `An error occurred while classifying the name: ${error.message}`
        });
    }
  }
};

export default classifyCtrl;

