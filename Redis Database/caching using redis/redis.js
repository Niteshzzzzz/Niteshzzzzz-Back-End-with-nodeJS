import { createClient } from "redis";

const redisClient = await createClient()

redisClient.on('error', (err) => {
    console.log('redis client error: ', err)
})

await redisClient.connect()
 

export default redisClient;