import { createClient } from "redis";

const redisClient = createClient();

export async function getRedisClient() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
  return redisClient;
}
