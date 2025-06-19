"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_controllers_1 = require("../../controllers/url.controllers");
const apiRoutes_1 = require("../../shared/constants/apiRoutes");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post(apiRoutes_1.ApiRoutes.URL_SHORTEN, url_controllers_1.getUrlHandler);
exports.default = router;
