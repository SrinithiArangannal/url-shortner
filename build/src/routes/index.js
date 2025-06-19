"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiRoutes_1 = require("../shared/constants/apiRoutes");
const v1_1 = __importDefault(require("./v1"));
const router = (0, express_1.Router)();
router.use(apiRoutes_1.ApiRoutes.API_V1, v1_1.default);
exports.default = router;
