import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


// 定义 Post 的类型结构
interface PostData {
  title: string;
  author: string;
  date: string;
  content: string;
}

const PostViewer: React.FC = () => {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
  fetch('/posts/post1.md')
    .then(r => r.text())
    .then(text => {

      // 手动解析 front-matter
      const parts = text.split('---');

      if (parts.length < 3) {
        console.error("front-matter 格式错误");
        return;
      }

      const metaBlock = parts[1];
      const content = parts.slice(2).join('---').trim();

      const data: any = {};

      metaBlock.split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        if (key && rest.length) {
          data[key.trim()] = rest.join(':').trim();
        }
      });

      setPost({
        title: data.title || "无标题",
        author: data.author || "未知",
        date: data.date || "",
        content,
      });
    })
    .catch(err => {
      console.error("加载失败:", err);
    });
}, []);

  if (!post) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};
export default PostViewer;