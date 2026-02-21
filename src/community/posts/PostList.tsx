import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostMeta {
  title: string;
  slug: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    const modules = import.meta.glob("../../communitydata/posts/*.md", {
      query: "?raw",
      import: "default",
    });

    Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const text: string = await resolver() as string;

        const parts = text.split("---");
        const metaBlock = parts[1];

        const data: any = {};
        metaBlock.split("\n").forEach(line => {
          const [key, ...rest] = line.split(":");
          if (key && rest.length) {
            data[key.trim()] = rest.join(":").trim();
          }
        });

        const slug = path.split("/").pop()?.replace(".md", "") || "";

        return {
          title: data.title || "无标题",
          slug
        };
      })
    ).then(setPosts);
  }, []);

  return (
    <div>
      <h2>帖子列表</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;