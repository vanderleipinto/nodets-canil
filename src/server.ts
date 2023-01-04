import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

/// TEMPLATE ENGINE
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views)"));
server.engine("mustache", mustache());

///PASTA PÚBLICA
server.use(express.static(path.join(__dirname, "../public")));

///ROTAS
server.use(mainRoutes);

///Quando não encontra nenhuma rota.
server.use((req, res) => {
  res.send("Página não encontrada!");
});

///SERVIDOR RODANDO
server.listen(process.env.PORT);
