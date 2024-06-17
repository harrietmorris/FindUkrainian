
import { Request, Response } from "express";


exports.getAllMiddleware = (modelName: { find: () => any; }) => {
  return async (_req: Request, res: Response) => {
    try {
      const result = await modelName.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

exports.getByIdMiddleware = (modelName: { findById: (arg0: any) => any; }) => {
  return async (req: Request, res: Response) => {
    try {
      const result = await modelName.findById(req.params.id);
      if (!result) {
        return res.status(404).json({ message: "Result not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
