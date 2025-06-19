"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkProcesses = void 0;
const nanoid_1 = require("nanoid");
const Link_1 = require("../repository/models/Link");
const database_1 = require("../configurations/database");
const redis_1 = require("../client/redis");
const logger_1 = __importDefault(require("../shared/utils/logger"));
const linkRepository = database_1.AppDataSource.getRepository(Link_1.Link);
class LinkProcesses {
    static getShortenedUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const redisClient = yield (0, redis_1.getRedisClient)();
            const result = redisClient.get(`shortUrl:${url}`);
            if (result) {
                return result;
            }
            const existingLink = yield linkRepository.findOne({
                where: { url },
            });
            if (existingLink === null || existingLink === void 0 ? void 0 : existingLink.count) {
                existingLink.count += 1;
                yield linkRepository.save(existingLink);
                if (existingLink.count > 10 && existingLink.shortUrl) {
                    yield redisClient.set(`shortUrl:${url}`, existingLink.shortUrl);
                    logger_1.default.info("Logged to redis successfully");
                }
                return existingLink.shortUrl;
            }
            const newLink = linkRepository.create({
                url,
                shortUrl: (0, nanoid_1.nanoid)(7),
                count: 1,
            });
            yield linkRepository.save(newLink);
            return newLink.shortUrl;
        });
    }
}
exports.LinkProcesses = LinkProcesses;
