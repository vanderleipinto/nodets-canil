import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query = req.query.q as string;

  if (!query) {
    /* caso a procura esteja vazia ele não enviará uma lista com tudo */
    res.redirect("/");
    return;
  }
  let list = Pet.getFromNome(query);

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
