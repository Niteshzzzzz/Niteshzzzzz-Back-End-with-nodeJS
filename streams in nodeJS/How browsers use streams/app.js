import http from "http";
import fs from 'node:fs/promises'

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  // res.setHeader("Content-Type", "text/txt");
  // res.setHeader("Content-Type", "image/webp");
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition", "attachment; filename=witcher.mp4");

  const fileHandle = await fs.open("D:\\The.Witcher.S03.E07.720p.WEB-DL.Hindi.5.1-English.ESub.x264-HDHub4u.Tv.mkv")

  const {size} = await fileHandle.stat()
  res.setHeader('Content-Length', size)

  const readStream = fileHandle.createReadStream({ highWaterMark: 10*1024*1024 })
  readStream.on('data', (chunk) => {
    res.write(chunk)
    readStream.pause()
    setInterval(() => {
      readStream.resume()
    }, 200)
  })

  readStream.on('end', () => {
    res.end('hello world')
  })

});

server.listen(3000, "localhost", () => {
  console.log("Server Started");
});
