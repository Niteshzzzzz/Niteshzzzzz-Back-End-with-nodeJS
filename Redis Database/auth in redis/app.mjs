import { createClient } from "redis";

const redisClient = createClient({
  password: "my$trongPass",
});
await redisClient.connect();

const result = await redisClient.ping();
console.log(result);

await redisClient.quit();
