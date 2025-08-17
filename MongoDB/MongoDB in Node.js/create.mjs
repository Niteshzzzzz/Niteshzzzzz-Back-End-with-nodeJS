import {MongoClient} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

await client.connect()

const db = client.db('school')

const studentCollection = db.collection('students')
const teacherCollection = db.collection('teachers')

const result1 = await studentCollection.insertOne({name: 'Nitesh Kumar', age: 22})
const result2 = await teacherCollection.insertMany([{name: 'Anurag Singh', age: 33}, {name: 'Rahul Singh', age: 32}])

console.log(result1, result2)

client.close()