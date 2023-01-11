import express, { Request, Response } from "express"; // importa dois tipos para rodar a página
import path from "path";
import mustache from "mustache-express";
import mainRoutes from "./routes/index";
import painelRoutes from "./routes/painel";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views")); // onde views é uma pasta criada dentro de src para armazenar as páginas html.
server.engine("mustache", mustache());

console.log(path.join(__dirname, "../public"));

server.use(path.join(__dirname, "../public"), express.static("public"));

server.use(express.urlencoded({ extended: true })); // habilita a captura de dados no corpo da requisição via POST

server.use(mainRoutes);
server.use("/painel", painelRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Pagina não encontrada!!");
});
server.listen(process.env.PORT);
