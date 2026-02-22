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
        margin: "0 auto",
        paddingTop: "40px",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        onClick={() => window.history.back()}
        style={{
          fontSize: "12px",
          color: "rgba(0,0,0,0.5)",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        ← 返回列表
      </div>

      <h1
        style={{
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "24px",
          color: "#2c3e50",
        }}
      >
        {slug}
      </h1>

      <div
        style={{
          fontSize: "14px",
          lineHeight: "1.8",
          color: "#333",
        }}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {/* 评论区 */}
      {slug && (
        <div style={{ marginTop: "60px" }}>
          <CommentBox postId={Number(slug)} />
        </div>
      )}
    </div>
  );
};

export default PostDetail;