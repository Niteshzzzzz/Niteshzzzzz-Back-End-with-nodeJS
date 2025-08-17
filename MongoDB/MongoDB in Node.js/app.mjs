import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

await client.connect()

const db = client.db('todoApp')

const collection = db.collection('todos')

const cursor = collection.find().skip(1).limit(0).sort({completed: 1}).batchSize(2)

console.log(await cursor.hasNext())
// console.log(await cursor.next())
console.log(await cursor.toArray())
console.log(await cursor.hasNext())

client.close()