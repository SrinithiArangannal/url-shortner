"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const loggerLevel_enum_1 = require("../../shared/enums/loggerLevel.enum");
const nodeEnv_enum_1 = require("../../shared/enums/nodeEnv.enum");
const env_1 = __importDefault(require("../../shared/utils/env"));
const loggerConfig = {
    level: env_1.default.LOG_LEVEL || loggerLevel_enum_1.LoggerLevel.INFO,
};
if (env_1.default.NODE_ENV === nodeEnv_enum_1.NodeEnv.LOCAL || env_1.default.NODE_ENV === nodeEnv_enum_1.NodeEnv.TEST) {
    loggerConfig.transport = {
        target: "pino-pretty",
        options: {
            colorize: true,
            levelFirst: true,
            singleLine: true,
            ignore: "pid,hostname,reqId,context,awsRequestId",
            messageFormat: "{msg}",
        },
    };
}
const logger = (0, pino_1.default)(loggerConfig);
exports.default = logger;
