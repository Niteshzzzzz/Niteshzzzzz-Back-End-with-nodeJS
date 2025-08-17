import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

await client.connect()

const db = client.db('school')

const studentCollection = db.collection('students')
const teacherCollection = db.collection('teachers')

// Delete collection
// const result1 = await studentCollection.drop()

// Delete document
// const result2 = await teacherCollection.deleteOne({_id: new ObjectId('685e4d9c0c48e41dcd0edd7d')})

//Delete a field or property
// const result2 = await teacherCollection.updateOne({_id: new ObjectId('685e4d9c0c48e41dcd0edd7c')}, {$unset: {field: ''}})\


//Delete Database
const result2 = await db.dropDatabase()

console.log(result2)

client.close()