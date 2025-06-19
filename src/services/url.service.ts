import { nanoid } from "nanoid";
import { Link } from "@/repository/models/Link";
import { AppDataSource } from "@/configurations/database";
import { getRedisClient } from "@/client/redis";
import logger from "@/shared/utils/logger";

const linkRepository = AppDataSource.getRepository(Link);
export class LinkProcesses {
  static async getShortenedUrl(url: string) {
    const redisClient = await getRedisClient();
    const result = redisClient.get(`shortUrl:${url}`);
    if (result) {
      return result;
    }
    const existingLink = await linkRepository.findOne({
      where: { url },
    });

    if (existingLink?.count) {
      existingLink.count += 1;
      await linkRepository.save(existingLink);
      if (existingLink.count > 10 && existingLink.shortUrl) {
        await redisClient.set(`shortUrl:${url}`, existingLink.shortUrl);
        logger.info("Logged to redis successfully");
      }
      return existingLink.shortUrl;
    }

    const newLink = linkRepository.create({
      url,
      shortUrl: nanoid(7),
      count: 1,
    });

    await linkRepository.save(newLink);
    return newLink.shortUrl;
  }
}
