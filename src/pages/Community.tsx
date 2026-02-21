import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostList from "../community/posts/PostList"
import PostDetail from "../community/posts/PostDetail"

export default function community() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:slug" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  )
}