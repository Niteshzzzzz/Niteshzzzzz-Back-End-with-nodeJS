import express from "express";
import redisClient from "./redis.js";

const app = express();

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id
  const jsonKey = `user:${userId}`
  const redisData = await redisClient.json.get(jsonKey)
  if(redisData) {
    return res.json(redisData)
  }
  const userData = await getUser(req.params.id);
  await redisClient.json.set(jsonKey, '$', userData)
  redisClient.expire(jsonKey, 15)
  res.json(userData);
});

app.listen(4000, () => {
  console.log("Server started on 4000");
});

async function getUser(userId) {
  const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
  return await response.json();
}
