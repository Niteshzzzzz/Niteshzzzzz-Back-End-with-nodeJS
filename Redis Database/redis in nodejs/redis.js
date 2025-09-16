import { createClient } from "redis";

const redisClient = await createClient()

redisClient.on('error', (err) => {
    console.log('redis client error: ', err)
})

await redisClient.connect()
 
redisClient.setJSON = async function (key, value) {
    const result = await this.set(key, JSON.stringify(value))
    return result;
}
redisClient.getJSON = async function (key) {
    const result = await this.get(key)
    return JSON.parse(result);
}

export default redisClient;