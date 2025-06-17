"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeEnv = void 0;
var NodeEnv;
(function (NodeEnv) {
    NodeEnv["LOCAL"] = "local";
    NodeEnv["QA"] = "qa";
    NodeEnv["STAGING"] = "staging";
    NodeEnv["UAT"] = "uat";
    NodeEnv["PRODUCTION"] = "prod";
    NodeEnv["TEST"] = "test";
    NodeEnv["DEVELOPMENT"] = "dev";
})(NodeEnv || (exports.NodeEnv = NodeEnv = {}));
