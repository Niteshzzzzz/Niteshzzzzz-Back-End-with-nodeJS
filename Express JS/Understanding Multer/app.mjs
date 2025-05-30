import express from 'express'
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const id = crypto.randomUUID()
    const extension = path.extname(file.originalname)
    file.id = id
    cb(null, id+extension)
  }
})

const upload = multer({ storage: storage })

// const upload = multer({ dest: './upload' })
const app = express()


// app.post('/', upload.single('myFile'), (req, res) => {
//     console.log(req.body)
//     res.send(req.file)
// })

app.post('/', upload.fields([{name: 'myFile', maxCount: 2}]), (req, res) => {
    console.log(req.body)
    res.send(req.files)
})

app.listen(4000, () => {
    console.log('server is listening on port number 4000...')
})