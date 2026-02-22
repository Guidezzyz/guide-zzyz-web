import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());

// Express 内置 JSON 解析
app.use(express.json());

// JSON 文件路径
const COMMENTS_FILE = '../../communitydata/comments.json';

// 定义评论类型
interface Comment {
  id: number;
  post_id: number;
  user: string;
  content: string;
  created_at: string;
  parent_id: number | null;
}

// 获取指定帖子的评论
app.get('/comments/:postId', (req, res) => {
  const postId = Number(req.params.postId);

  // 读取 JSON 文件并指定类型
  const data = fs.readFileSync(COMMENTS_FILE, 'utf-8');
  const comments: Comment[] = JSON.parse(data);

  // 明确回调类型
  const filteredComments = comments.filter((c: Comment) => c.post_id === postId);

  res.json(filteredComments);
});

// 添加评论
app.post('/comments', (req, res) => {
  const { post_id, user, content, parent_id } = req.body;

  const data = fs.readFileSync(COMMENTS_FILE, 'utf-8');
  const comments: Comment[] = JSON.parse(data);

  const newComment: Comment = {
    id: comments.length + 1,
    post_id,
    user,
    content,
    created_at: new Date().toISOString(),
    parent_id: parent_id || null
  };

  comments.push(newComment);

  // 写回 JSON 文件
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2));

  res.json(newComment);
});

app.listen(3001, () => console.log('Server running on port 3001'));