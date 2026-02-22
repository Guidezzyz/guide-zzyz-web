import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import CommentBox from "../comments/CommentBox"
const PostDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (!slug) return;

    // public/posts 里对应的 Markdown 文件
    fetch(`/posts/${slug}.md`)
      .then(res => res.text())
      .then((text) => {
        // 如果你原本有 YAML meta，用 --- 分割
        const parts = text.split("---");
        const content = parts.slice(2).join("---"); // 去掉 meta
        setContent(content);
      })
      .catch(() => {
        setContent("无法加载文章内容。");
      });
  }, [slug]);

  if (!content) return <div>加载中...</div>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "40px 24px 80px 24px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
      }}
    >
      <button
        onClick={() => window.history.back()}
        style={{
          background: "#f3f4f6",
          border: "none",
          padding: "8px 14px",
          borderRadius: "8px",
          fontSize: "13px",
          color: "#374151",
          cursor: "pointer",
          marginBottom: "30px",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#e5e7eb";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#f3f4f6";
        }}
      >
        ← 返回列表
      </button>

      <h1
        style={{
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "30px",
        color: "#1f2937",
        lineHeight: "1.4",
      }}
      >
        {slug}
      </h1>

      <div
        style={{
          fontSize: "16px",
          lineHeight: "1.9",
          color: "#374151",
          maxWidth: "680px",
        }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {/* 评论区 */}
      {/* 分割线 */}
      <hr style={{
        margin: "60px 0 40px 0",
        border: "none",
        borderTop: "1px solid #e5e7eb"
      }} />
      {slug && (
        <div
          style={{
            background: "#f9fafb",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            评论
          </h2>

          <CommentBox postId={slug} />
        </div>
      )}
    </div>
  );
};

export default PostDetail;