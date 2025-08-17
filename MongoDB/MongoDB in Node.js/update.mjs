import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

await client.connect()

const db = client.db('school')

const studentCollection = db.collection('students')
const teacherCollection = db.collection('teachers')

const result1 = await studentCollection.updateOne({_id: new ObjectId('685e4d9c0c48e41dcd0edd7b')}, {$set: {age: 21}})
const result2 = await teacherCollection.replaceOne({name: 'Anurag Singh'}, {name: 'Anurage', age: 42, field: 'coding'})

console.log(result1, result2)

client.close()