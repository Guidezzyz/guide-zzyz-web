import React, { useEffect, useState } from 'react';

// 定义帖子类型
interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

const PostViewer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 假设 XML 放在 data 目录下
    fetch('./data/post1.xml')
      .then(response => response.text())
      .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const postNodes = xmlDoc.getElementsByTagName("post");

        const parsedPosts: Post[] = Array.from(postNodes).map(node => ({
          id: node.getAttribute('id') || '',
          author: node.getElementsByTagName('author')[0]?.textContent || '',
          content: node.getElementsByTagName('content')[0]?.textContent || '',
          timestamp: node.getElementsByTagName('timestamp')[0]?.textContent || '',
        }));

        setPosts(parsedPosts);
        setLoading(false);
      })
      .catch(err => {
        console.error("加载 XML 出错:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>正在加载帖子...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>帖子浏览器</h1>
      <hr />
      {posts.map(post => (
        <div key={post.id} style={cardStyle}>
          <h3>{post.author} <small style={{ color: '#888' }}>{post.timestamp}</small></h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

// 简单的样式
const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  margin: '10px 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default PostViewer;