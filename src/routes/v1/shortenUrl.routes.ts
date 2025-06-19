import { getUrlHandler } from "@/controllers/url.controllers";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { Router } from "express";

const router = Router();

router.post(ApiRoutes.URL_SHORTEN, getUrlHandler);

export default router;
