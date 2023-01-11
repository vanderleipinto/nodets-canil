import { Router } from "express";
import * as homeController from "../controllers/homeController";
import * as infoController from "../controllers/infoController";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/", homeController.home);

router.get("pages/contato", infoController.contato);
router.get("/sobre", infoController.sobre);

router.get("/nome", userController.nome);
router.get("/idade", userController.idade);
router.post("/idade", userController.idadePOST);

export default router;
