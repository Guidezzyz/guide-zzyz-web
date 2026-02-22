import React, { useEffect, useState } from "react"

interface Comment {
  id: number
  content: string
}

interface CommentBoxProps {
  postId: string
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [input, setInput] = useState("")
  useEffect(() => {
    fetch(`http://localhost:3001/comments/${postId}`)
      //the link should be specified in the .env file, and the server should be started separately
      .then(res => res.json())
      .then(setComments)
  }, [postId])

  const handleSubmit = async () => {
    if (!input.trim()) return

    const res = await fetch(
      `http://localhost:3001/comments/${postId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input })
      }
    )

    const savedComment: Comment = await res.json()

    setComments(prev => [...prev, savedComment])
    setInput("")
  }

  return (
    <div>
      <h3 style={{
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "20px",
        color: "#1f2937"
      }}>
        评论
      </h3>

      {/* 评论列表 */}
      <div>
        {comments.map((c, index) => (
          <div
            key={c.id}
            style={{
              padding: "20px 0",
              borderTop: index === 0 ? "none" : "1px solid #e5e7eb",
            }}
          >
            <div style={{
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#374151"
            }}>
              {c.content}
            </div>
          </div>
        ))}
      </div>

      {/* 输入区域 */}
      <div style={{ marginTop: "30px" }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Write a comment..."
          style={{
            width: "100%",
            minHeight: "120px",
            padding: "14px",
            fontSize: "14px",
            lineHeight: "1.6",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            resize: "vertical",
            marginBottom: "16px",
            outline: "none"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            background: "#2563eb",
            color: "#ffffff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1d4ed8"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#2563eb"
          }}
        >
          发送
        </button>
      </div>
    </div>
  )
}

export default CommentBox