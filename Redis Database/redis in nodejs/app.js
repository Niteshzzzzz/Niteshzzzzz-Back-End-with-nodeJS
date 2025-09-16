import redisClient from "./redis.js";


const user = {
    name: 'Nitesh Kumar',
    age: 22,
    profession: 'Software developer'
}

// const result = await redisClient.setJSON('customer', user)
const result = await redisClient.getJSON('customer')

console.log(result)

await redisClient.quit()