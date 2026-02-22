import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostMeta {
  title: string;
  slug: string;
}

const POST_FILES = ["post1.md", "post2.md"]; // 手动列出 public/posts 里的文件

const PostList = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    Promise.all(
      POST_FILES.map(async (fileName) => {
        const res = await fetch(`/posts/${fileName}`);
        const text = await res.text();

        // 解析 YAML 样式的 meta
        const parts = text.split("---");
        const metaBlock = parts[1] || "";

        const data: any = {};
        metaBlock.split("\n").forEach(line => {
          const [key, ...rest] = line.split(":");
          if (key && rest.length) {
            data[key.trim()] = rest.join(":").trim();
          }
        });

        const slug = fileName.replace(".md", "");

        return {
          title: data.title || "无标题",
          slug
        };
      })
    ).then(setPosts);
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
              borderRadius: "8px",
              padding: "16px 20px",
              transition: "all 0.2s ease",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "500", color: "#2c3e50", marginBottom: "6px" }}>
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