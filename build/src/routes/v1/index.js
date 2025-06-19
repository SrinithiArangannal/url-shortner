"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRoutes_1 = require("../../shared/constants/apiRoutes");
const express_1 = require("express");
const shortenUrl_routes_1 = __importDefault(require("./shortenUrl.routes"));
const router = (0, express_1.Router)();
router.use(apiRoutes_1.ApiRoutes.URL_BASE, shortenUrl_routes_1.default);
exports.default = router;
