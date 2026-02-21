import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const PostDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const modules = import.meta.glob("../../communitydata/posts/*.md", {
        query: "?raw",
        import: "default",
        });

    const loader = modules[`../../communitydata/posts/${slug}.md`];

    if (loader) {
      loader().then((text: any) => {
        const parts = text.split("---");
        const content = parts.slice(2).join("---");
        setContent(content);
      });
    }
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
        {/* 这里放回你原来的正文渲染 */}
        <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    </div>
    );
};

export default PostDetail;