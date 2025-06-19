import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { Router } from "express";
import urlRoutes from "./shortenUrl.routes";

const router = Router();

router.use(ApiRoutes.URL_BASE, urlRoutes);

export default router;
