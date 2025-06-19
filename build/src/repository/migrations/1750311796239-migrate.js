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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrate1750311796239 = void 0;
class Migrate1750311796239 {
    constructor() {
        this.name = 'Migrate1750311796239';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            CREATE TABLE "link" (
                "id" SERIAL NOT NULL,
                "url" character varying NOT NULL,
                "shortUrl" character varying NOT NULL,
                "count" integer NOT NULL DEFAULT '0',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_26206fb7186da72fbb9eaa3fac9" PRIMARY KEY ("id")
            )
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            DROP TABLE "link"
        `);
        });
    }
}
exports.Migrate1750311796239 = Migrate1750311796239;
