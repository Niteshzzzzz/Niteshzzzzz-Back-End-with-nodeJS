import express from 'express'

const app = express()

// app.use((req, res, next) => {
//     console.log('kgood')
//     next()
// })

app.use(express.json())

app.get('/', (req, res, next) => {
    // res.send('hello from server...')
    next()
})
app.get('/', (req, res) => {
    res.send('How are you.')
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('How are you.')
})


app.listen(4000, () => {
    console.log('server listen on 4000.')
})