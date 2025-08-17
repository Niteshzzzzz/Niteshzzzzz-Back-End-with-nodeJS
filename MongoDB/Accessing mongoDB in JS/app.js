use('todoApp')

// db.todo.insertOne({title: 'Learning node.js', completed: false})

const todoCollection = db.getCollection('todos')

for (let i = 1; i <= 10; i++) {
    todoCollection.insertOne({
        title: `Task ${i}`,
        completed: i % 2 == 0 ? true : false
    })
}

console.log(db.todos.find())