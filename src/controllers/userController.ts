import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;

  console.log("Query String= ", nome);

  res.render(`pages/nome`, {
    nome,
  });
};

export const idade = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadePOST = (req: Request, res: Response) => {
  let idade: number = 0;
  let mostrarIdade: boolean = false;
  if (req.body.anoNascimento) {
    let anoNascimento: number = parseInt(req.body.anoNascimento as string);
    let anoAtual: number = new Date().getFullYear();

    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }
  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};
