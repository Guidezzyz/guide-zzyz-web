import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"
//另外开了一个3001端口的服务器来处理评论数据，前端通过fetch请求这个服务器来获取和提交评论数据
const app = express()
app.use(cors())
app.use(express.json())

// 读取评论
app.get("/comments/:id", (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "public/comments",
    `${req.params.id}.json`
  )

  if (!fs.existsSync(filePath)) {
    return res.json([])
  }

  const data = fs.readFileSync(filePath, "utf-8")
  res.json(JSON.parse(data))
})

// 新增评论
app.post("/comments/:id", (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "public/comments",
    `${req.params.id}.json`
  )

  let comments = []

  if (fs.existsSync(filePath)) {
    comments = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  }

  const newComment = {
    id: Date.now(),
    content: req.body.content
  }

  comments.push(newComment)
  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2))

  res.json(newComment)
})

app.listen(3001, () => {
  console.log("server running at 3001")
})