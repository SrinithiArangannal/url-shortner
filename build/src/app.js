"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("@/shared/utils/env"));
const qs_1 = __importDefault(require("qs"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const database_1 = require("./configuration/database");
(0, database_1.connectDB)();
const app = (0, express_1.default)();
app.set("query parser", (str) => {
    return qs_1.default.parse(str, { arrayLimit: 1000, depth: 10 });
});
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
const port = env_1.default.PORT;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
