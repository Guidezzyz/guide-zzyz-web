import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"

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

// 新增评论（支持 parentId）
app.post("/comments/:id", (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "public/comments",
    `${req.params.id}.json`
  )

  let comments: any[] = []

  if (fs.existsSync(filePath)) {
    comments = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  }

  const newComment = {
    id: Date.now(),
    content: req.body.content,
    parentId:
      req.body.parentId === null || req.body.parentId === undefined
        ? null
        : Number(req.body.parentId)
  }

  comments.push(newComment)

  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2))

  res.json(newComment)
})

app.listen(3001, () => {
  console.log("server running at 3001")
})