import { Request, Response } from "express";

export const contato = (req: Request, res: Response) => {
  res.render(`contato`);
};

export const sobre = (req: Request, res: Response) => {
  res.render(`pages/sobre`);
};
