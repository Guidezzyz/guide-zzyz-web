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

  useEffect(() => {
    fetch('/posts/post1.md')
      .then(r => r.text())
      .then(text => {
        const { data, content } = matter(text);
        setPost({
          title: data.title,
          author: data.author,
          date: data.date,
          content,
        });
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