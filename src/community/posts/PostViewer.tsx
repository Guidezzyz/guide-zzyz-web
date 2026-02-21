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
    // 模拟从服务器或本地路径获取文件
    fetch('/post1.md') 
      .then((response) => response.text())
      .then((text) => {
        // 使用 gray-matter 解析元数据和正文
        const { data, content } = matter(text);
        setPost({
          title: data.title,
          author: data.author,
          date: data.date,
          content: content,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("加载 Markdown 失败:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>正在加载帖子...</div>;
  if (!post) return <div>找不到帖子内容。</div>;

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