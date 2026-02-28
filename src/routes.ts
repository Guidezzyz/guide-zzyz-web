import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import JoinUs from "./pages/JoinUs";
import Root from "./Root";
import Community from "./pages/Community";
import PostList from "./community/posts/PostList"
import PostDetail from "./community/posts/PostDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "submit", Component: Submit },
      { path: "join-us", Component: JoinUs },
      { path: "community", Component: Community ,
        children: [
          { index: true, Component: PostList },
          { path: ":slug", Component: PostDetail },
        ],
      },
    ],
  },
]);
