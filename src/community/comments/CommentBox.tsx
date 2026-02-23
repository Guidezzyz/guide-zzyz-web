import React, { useEffect, useState } from "react"

interface Comment {
  id: number
  content: string
  parentId: number | null
}

interface CommentBoxProps {
  postId: string
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [input, setInput] = useState("")
  const [replyTo, setReplyTo] = useState<number | null>(null)

  useEffect(() => {
    fetch(`http://localhost:3001/comments/${postId}`)
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
        body: JSON.stringify({
          content: input,
          parentId: replyTo
        })
      }
    )

    const savedComment: Comment = await res.json()

    setComments(prev => [...prev, savedComment])
    setInput("")
    setReplyTo(null)
  }

  const renderComments = (parentId: number | null) => {
    return comments
      .filter(c => c.parentId === parentId)
      .map(c => (
        <div
          key={c.id}
          style={{
            marginLeft: parentId ? "40px" : "0",
            padding: "20px 0",
            borderTop: parentId ? "none" : "1px solid #d0ceceff",
            background: "#ffffff"
          }}
        >
          <div
            style={{
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#000000"
            }}
          >
            {c.content}
          </div>

          <button
            onClick={() => setReplyTo(c.id)}
            style={{
              marginTop: "6px",
              fontSize: "12px",
              background: "transparent",
              border: "none",
              color: "#299aefff",
              cursor: "pointer"
            }}
          >
            回复
          </button>

          {renderComments(c.id)}
        </div>
      ))
  }

  return (
    <div style={{ background: "#ffffff", padding: "20px" }}>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#000000"
        }}
      >
        评论
      </h3>

      <div>{renderComments(null)}</div>

      <div style={{ marginTop: "30px" }}>
        {replyTo && (
          <div style={{ marginBottom: "10px", fontSize: "12px", color: "#000000" }}>
            正在回复 #{replyTo}
            <button
              onClick={() => setReplyTo(null)}
              style={{
                marginLeft: "10px",
                fontSize: "12px",
                background: "transparent",
                border: "none",
                color: "#2389e7ff",
                cursor: "pointer"
              }}
            >
              取消
            </button>
          </div>
        )}

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
            border: "2px solid #b0afafff",
            resize: "vertical",
            marginBottom: "16px",
            outline: "none",
            background: "rgba(242, 242, 242, 1)",
            color: "#000000"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            background: "#1a63ebff",
            color: "#ffffff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          发送
        </button>
      </div>
    </div>
  )
}

export default CommentBox