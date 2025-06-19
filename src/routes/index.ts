import { Router } from "express";

import { ApiRoutes } from "@/shared/constants/apiRoutes";

import V1Routes from "./v1";

const router = Router();

router.use(ApiRoutes.API_V1, V1Routes);

export default router;
