import {MongoClient} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

await client.connect()

const db = client.db('expensesApp')

// console.log(db.namespace)

// const collections = await db.listCollections().toArray()
// console.log(collections)

const expensesCollection = db.collection('expenses')
const expenses = await expensesCollection.find().toArray()

console.log(expenses)

client.close()