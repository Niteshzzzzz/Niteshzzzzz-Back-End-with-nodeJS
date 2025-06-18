import express from "express";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.static("public"));
// app.use(express.text())
// app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post("/user", (req, res) => {
  
  console.log(req.body)
  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  res.json({ message: "Got Data" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
