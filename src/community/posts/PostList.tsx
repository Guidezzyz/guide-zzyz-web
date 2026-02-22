import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostMeta {
  title: string;
  slug: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    // fetch 公共 JSON 文件
    fetch("/posts/posts.json")
      .then(res => res.json())
      .then((data: PostMeta[]) => setPosts(data))
      .catch(() => {
        console.error("无法加载帖子列表");
      });
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px 60px 20px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "24px", color: "#2c3e50" }}>
        社区帖子
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={post.slug}
            style={{
              textDecoration: "none",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px 24px",
              transition: "all 0.2s ease",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ 
              fontSize: "16px", 
            fontWeight: "500", 
            color: "#2c3e50", 
            marginBottom: "6px" ,
            lineHeight: "1.6"
            }}>
              {post.title}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)" }}>
              点击查看详情 →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostList;