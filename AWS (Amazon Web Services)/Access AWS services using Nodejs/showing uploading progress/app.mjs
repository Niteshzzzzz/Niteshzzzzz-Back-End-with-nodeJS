import {S3Client} from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { createReadStream } from 'node:fs'
// import second from 'node:stream'

const s3Client = new S3Client({
    profile: 'storageApp'
})

const readStream = createReadStream('D:\\Panchayat.S04.E07.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms.mkv')

const upload = new Upload({
    client: s3Client,
    params: {
        Bucket: 'nodejs-bucket-n1',
        Key: 'Panchayat.S04.E07.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms.mkv',
        Body: readStream,
        ContentType: 'video/mp4'
    }
})

upload.on('httpUploadProgress', (progress) => {
    process.stdout.write(`\r${((progress.loaded/progress.total)*100).toFixed(2)}% uploaded`)
})

const res = await upload.done()