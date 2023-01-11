import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let user = {
    name: "Vanderlei",
    age: 40,
  };

  let list = Product.getPriceAfter(40);

  res.render(`pages/home`, {
    user,
    showWelcome: true,
    products: list,
    listaQualquer: ["Alguma coisa", "Uma coisa qualquer", "Uma coisa qualquer"],
  });
};
