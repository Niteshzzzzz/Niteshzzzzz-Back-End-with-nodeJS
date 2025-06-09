import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.use(cors({
    origin: 'http://127.0.0.2:5500',
    credentials: true
}))

app.get('/', (req, res) => {
    console.log(req.headers.cookie)
    // res.set({
    //     // 'Set-Cookie': 'name=nitesh'
    //     'Set-Cookie': 'name=nitesh;sameSite=None;Secure'
    // })
    res.cookie('age', '22', {
        maxAge: 60*1000,
        httpOnly: true,
        sameSite: 'none',
        secure: true
    })
    console.log(req.cookies)
    res.send('Cookies...')
})

app.listen(4000, () => {
    console.log('Server is listening on port number 4000...')
})