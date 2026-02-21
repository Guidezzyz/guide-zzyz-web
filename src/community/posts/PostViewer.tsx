import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

// 定义 Post 的类型结构
interface PostData {
  title: string;
  author: string;
  date: string;
  content: string;
}

const PostViewer: React.FC = () => {
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
  fetch('/posts/post1.md')
    .then((response) => {
      console.log("status:", response.status)
      return response.text()
    })
    .then((text) => {
      console.log("text length:", text.length)

      const { data, content } = matter(text)
      console.log("data:", data)

      setPost({
        title: data.title || "测试标题",
        author: data.author || "测试作者",
        date: data.date || "",
        content: content || "测试内容",
      })

      setLoading(false)
    })
    .catch((err) => {
      console.error("catch:", err)
      setLoading(false)
    })
}, [])

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* 头部信息 */}
      <header style={{ borderBottom: '1px solid #eee', marginBottom: '20px' }}>
        <h1>{post.title}</h1>
        <p style={{ color: '#666' }}>
          <strong>作者:</strong> {post.author} | <strong>发布日期:</strong> {post.date}
        </p>
      </header>

      {/* Markdown 正文渲染 */}
      <article className="markdown-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default PostViewer;