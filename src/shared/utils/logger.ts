import pino from "pino";

import { LoggerLevel } from "@/shared/enums/loggerLevel.enum";
import { NodeEnv } from "@/shared/enums/nodeEnv.enum";
import env from "@/shared/utils/env";

const loggerConfig: pino.LoggerOptions = {
  level: env.LOG_LEVEL || LoggerLevel.INFO,
};

if (env.NODE_ENV === NodeEnv.LOCAL || env.NODE_ENV === NodeEnv.TEST) {
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

const logger = pino(loggerConfig);

export default logger;
