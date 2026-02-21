import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const PostDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const modules = import.meta.glob("../../communitydata/posts/*.md", { as: "raw" });

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
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostDetail;